import {
  Component,
  OnInit,
  Input,
  Output,
  Optional,
  EventEmitter,
  OnChanges,
  ViewChild,
  AfterContentChecked
} from "@angular/core";
import { Router, ActivatedRoute, RouterLinkActive } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { ConfirmationService } from "../../services/confirmation.service";
// import { environment } from "environments/environment";
// import { MdDialog, MdDialogRef } from "@angular/material";
// import { ShowCommitAndVersionDetailsComponent } from "./../show-commit-and-version-details/show-commit-and-version-details.component";
import { LanguageService } from "../../services/language.service";
import { MatDialog } from "@angular/material/dialog";
import { environment } from "src/environments/environment";
import { ShowCommitAndVersionDetailsComponent } from "../show-commit-and-version-details/show-commit-and-version-details.component";
import { CookieService } from 'ngx-cookie-service';
import { SessionStorageService } from "Common-UI/src/registrar/services/session-storage.service";
@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.css"]
})
export class AppHeaderComponent implements OnInit, OnChanges, AfterContentChecked {

  @ViewChild('activePharmacist')
  private activePharmacist!: RouterLinkActive;
  
  @Input()
  showRoles!: boolean;
  storeName: any;
  facility: any;
  userName!: string;
  designation!: string;
  providerServiceID!: string;
  isAuthenticated!: boolean;
  isExternal!: boolean;
  filteredNavigation: any;
  roles: any;
  parent_app: any;
  parent_url = this.sessionstorage.getItem("return");
  reportsList:any = [];
  languageArray: any;
  language_file_path: any = "./assets/";
  language: any = 'English';
  currentLanguageSet: any;
  navigation: any;
  updateCSSToShowActivePharmacist= false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private dialog: MatDialog,
    private http_service: LanguageService,
    private confirmationService: ConfirmationService,
    readonly sessionstorage:SessionStorageService,
    private cookieService: CookieService,
  ) {}
  license: any;
  ngOnInit() {
    // this.changeLanguage(this.language);
    this.getUIVersionAndCommitDetails();
    // this.servicePoint = localStorage.getItem('servicePointName');
    // const userName = localStorage.getItem('userName');
    const userName = this.sessionstorage.userName;
    if (userName != null) {
      this.userName = userName;
    }
    // const designation = localStorage.getItem('designation');
    const designation = this.sessionstorage.getItem('designation');
    if (designation != null) {
      this.designation = designation;
    }
    this.isExternal = this.sessionstorage.getItem('isExternal') == 'true';
    this.parent_app = this.sessionstorage.getItem('host');
    // const providerServiceID = localStorage.getItem('providerServiceID');
    const providerServiceID = this.sessionstorage.providerServiceID;
    if (providerServiceID != null) {
      this.providerServiceID = providerServiceID;
    }
    
    this.isAuthenticated =
      sessionStorage.getItem("isAuthenticated") == "true" ? true : false;
    // if (this.showRoles) {
    //   this.roles = JSON.parse(localStorage.getItem("role"));
    //   this.filteredNavigation = this.navigation.filter(item => {
    //     return this.roles.includes(item.role);
    //   });
    //   console.log("filteredNavigation", this.filteredNavigation);
    // }
    this.license = environment.licenseUrl;
    this.reportsList = [
      "Inward stock Report",
      "Consumption Report",
      "Expiry Report",
      "Beneficiary drug issue Report"
    ];
    // if (localStorage.getItem("currentLanguage") == "undefined") {
    //   this.language = "English";
    // } else {
    //   this.language = localStorage.getItem("currentLanguage");
    // }
    if (this.isAuthenticated) {
      this.fetchLanguageSet();
      this.refreshLogin();
    }
    
  }

  ngAfterContentChecked(): void {
    if (this.activePharmacist !== undefined && this.activePharmacist.isActive) {
        console.log('isActive');
        this.updateCSSToShowActivePharmacist = true;
    }
  }

  refreshLogin(){
    this.auth.getUserDetails().subscribe((res: any) => {
      // console.log(">>>>>>", res);
      if (res.statusCode == '200') {
        if (res.data.previlegeObj && res.data.previlegeObj[0]) {
          this.cookieService.set('Jwttoken', res.data.Jwttoken);
          delete res.data.Jwttoken;
          this.sessionstorage.setItem('loginDataResponse', JSON.stringify(res.data));
          if(res.data && res.data.key){
            sessionStorage.setItem('key', res.data.key);
          }

          // sessionStorage.setItem('designation', this.designation);
          this.sessionstorage.userID=res.data.userID;
          this.sessionstorage.userName=res.data.userName;
          this.sessionstorage.username=res.data.userName;
        } else {
          this.confirmationService.alert('Seems you are logged in from somewhere else, Logout from there & try back in.', 'error');
        }
      }
    });
  }

  fetchLanguageSet() {
    this.http_service.fetchLanguageSet().subscribe((languageRes: any) => {
      if (languageRes && Array.isArray(languageRes.data)) {
        this.languageArray = languageRes.data;
        this.getLanguage();
      }
    });
  }

  getLanguage() {
    if (sessionStorage.getItem('currentLanguage') != null) {
      this.changeLanguage(sessionStorage.getItem('currentLanguage'));
    } else {
      this.changeLanguage(this.language);
    }
  }
  changeLanguage(language: any) {
    this.http_service
      .getLanguage(this.language_file_path + language + '.json')
      .subscribe(
        (response) => {
          if (response !== undefined && response !== null) {
            this.languageSuccessHandler(response, language);
          } else {
            alert(this.currentLanguageSet.alerts.langNotDefinesd);
          }
        },
        (error) => {
          alert(
            this.currentLanguageSet.alerts.comingUpWithThisLang +
              ' ' +
              language,
          );
        },
      );
  }
  languageSuccessHandler(response: any, language: any) {
    console.log('language is ', response);
    if (response == undefined) {
      alert(this.currentLanguageSet.alerts.langNotDefinesd);
    }
    if (response[language] != undefined) {
      this.currentLanguageSet = response[language];
      // localStorage.setItem('currentLanguage', language);
      sessionStorage.setItem('currentLanguage', language);
      if (this.currentLanguageSet) {
        this.languageArray.forEach((item: any) => {
          if (item.languageName == language) {
            this.language = language;
          }
        });
      } else {
        this.language = language;
      }
      this.http_service.getCurrentLanguage(response[language]);
      this.roleNavigation();
    } else {
      alert(
        this.currentLanguageSet.alerts.info.comingUpWithThisLang +
          ' ' +
          language,
      );
    }
  }


  // fetchLanguageSet() {
  //   this.http_service.fetchLanguageSet().subscribe(languageRes => {
  //     if (languageRes !== undefined && languageRes !== null) {
  //     this.languageArray = languageRes;
  //     this.getLanguage();
  //     }
  //   });
  // }
  // getLanguage() {
  //   if (localStorage.getItem('currentLanguage') != null) {
  //     this.changeLanguage(localStorage.getItem('currentLanguage'));
  //   } else {
  //     this.changeLanguage(this.language);
  //   }
  // }
  // changeLanguage(language: any) {
    
  //   this.http_service
  //     .getLanguage(this.language_file_path + language + ".json")
  //     .subscribe(
  //       response => {
  //         if(response !== undefined && response !== null){
  //           this.languageSuccessHandler(response, language);
  //         } else {
  //           alert(this.currentLanguageSet.alerts.langNotDefinesd);
  //         }
  //       },
  //       error => {
  //         alert(
  //           this.currentLanguageSet.alerts.comingUpWithThisLang +
  //             " " +
  //             language
  //         );
  //       }
  //     );
  // }
  // languageSuccessHandler(response: any, language: any) {
  //   console.log("language is ", response);
  //   if (response == undefined) {
  //     alert(this.currentLanguageSet.alerts.langNotDefinesd)
  //   }
  //   if (response[language] != undefined) {
  //     this.currentLanguageSet = response[language];
  //     localStorage.setItem('currentLanguage', language);
  //     if (this.currentLanguageSet) {
  //       this.languageArray.forEach((item: any) => {
  //         if (item.languageName == language) {
  //           this.language = language;
  //         }
  //       });
  //     } else {
  //       this.language = language;
  //     }
  //     this.http_service.getCurrentLanguage(response[language]);
  //     this.roleNavigation();
  //   } else {
  //     alert(this.currentLanguageSet.alerts.comingUpWithThisLang + " " + language);
  //   }
  // }

  ngOnChanges() {

    const facility = this.sessionstorage.getItem('facilityDetail');
    console.log(">>>sessionStorage", facility);
    
    if (facility) {
      this.facility = JSON.parse(facility);
    }
    if (this.facility) {
      this.storeName = this.facility.facilityName;
    }
  }

  roleNavigation() {
  this.navigation = [
    {
      role: this.currentLanguageSet.itemDispense.pharmacist,
      work: [
        {
          link: "/inventory/medicineDispense",
          label: this.currentLanguageSet.inventory.patientIssueWithoutRx
        },
        {
          link: "/inventory/physicalStockEntry",
          label: this.currentLanguageSet.inventory.physicalStockEntry
        },
        { link: "/inventory/storeStockAdjustment", label: this.currentLanguageSet.inventory.stockAdjustment },
        { link: "/inventory/storeSelfConsumption", label: this.currentLanguageSet.inventory.storeConsumption },
        { link: "/inventory/storeStockTransfer", label: this.currentLanguageSet.inventory.stockTransfer },
        { link: "/inventory/patientReturn", label: this.currentLanguageSet.inventory.patientReturns },
        { link: "/inventory/indentOrderWorklist", label: this.currentLanguageSet.inventory.indent }
      ]
    },
    {
      role: this.currentLanguageSet.inventory.reports,
      work: [
        { link: "/inventory/inwardStockReport", label: this.currentLanguageSet.inventory.inwardStockReport },
        { link: "/inventory/consumptionReport", label: this.currentLanguageSet.inventory.consumptionReport },
        { link: "/inventory/expiryReport", label: this.currentLanguageSet.inventory.expiryReport },
        {
          link: "/inventory/beneficiaryDrugIssueReport",
          label: this.currentLanguageSet.inventory.beneficiaryDrugIssueReport
        },
        {
          link: "/inventory/dailyStockReportDetails",
          label: this.currentLanguageSet.inventory.dailyStockReportDetails
        },
        {
          link: "/inventory/dailyStockReportSummary",
          label: this.currentLanguageSet.inventory.dailyStockReportSummary
        },
        { link: "/inventory/monthlyReport", label: this.currentLanguageSet.inventory.monthlyReport },
        { link: "/inventory/yearlyReport", label: this.currentLanguageSet.inventory.yearlyReport },
        { link: "/inventory/shortExpiryReport", label: this.currentLanguageSet.inventory.shortExpiryReport },
        { link: "/inventory/transitReport", label: this.currentLanguageSet.inventory.transitReport}
      ]
    }
  ];
}


  // navigation1 = [{
  //   roleSup: 'Supervisor',
  //   workSup: [
  //     { link: '/inventory/inwardStockReport', label: 'Inward Stock Report' },
  //     { link: '/inventory/consumptionReport', label: 'Consumption Report' },
  //     { link: '/inventory/expiryReport', label: 'Expiry Report' },
  //     { link: '/inventory/beneficiaryDrugIssueReport', label: 'Beneficiary drug issue Report' },
  //     { link: '/inventory/dailyStockReportDetails ', label: 'Daily Stock Report Details ' },
  //     { link: '/inventory/dailyStockReportSummary ', label: 'Daily Stock Report Summary ' },
  //     { link: '/inventory/monthlyReport ', label: 'Monthly Report ' },
  //     { link: '/inventory/yearlyReport ', label: 'Yearly Report ' },

  //   ]
  // },
  // ];

  logout() {
    this.auth.logoutUser().subscribe((res: any) => {
      if (res && res.statusCode == 200) {
        this.router.navigate(["/login"]);
        this.changeLanguage('English');
        localStorage.clear();
        sessionStorage.clear();
      }
    });
  }
  commitDetailsUI: any;
  versionUI: any;
  getUIVersionAndCommitDetails() {
    const commitDetailsPath: any = "assets/git-version.json";
    this.auth.getUIVersionAndCommitDetails(commitDetailsPath).subscribe(
      res => {
        console.log("res", res);
        this.commitDetailsUI = res;
        this.versionUI = this.commitDetailsUI["version"];
      },
      err => {
        console.log("err", err);
      }
    );
  }
  showVersionAndCommitDetails() {
    this.auth.getAPIVersionAndCommitDetails().subscribe(
      (res: any) => {
        if (res.statusCode == 200) {
          this.constructAPIAndUIDetails(res.data);
        }
      },
      err => {}
    );
  }
  constructAPIAndUIDetails(apiVersionAndCommitDetails: any) {
    const data = {
      commitDetailsUI: {
        version: this.commitDetailsUI["version"],
        commit: this.commitDetailsUI["commit"]
      },
      commitDetailsAPI: {
        version: apiVersionAndCommitDetails["git.build.version"] || "NA",
        commit: apiVersionAndCommitDetails["git.commit.id"] || "NA"
      }
    };
    if (data) {
      this.showData(data);
    }
  }
  showData(versionData: any) {
    const dialogRef = this.dialog.open(ShowCommitAndVersionDetailsComponent, {
      data: versionData
    });
  }

  backToParent() {
    // this.confirmationService.confirm('Info', `Go Back to ${this.parent_app} ? please confirm.`)
    // .subscribe((res) => {
    // if (res) {
    // sessionStorage.clear();
    // localStorage.clear();
    sessionStorage.removeItem("parentBen");
    sessionStorage.removeItem("parentBenVisit");
    sessionStorage.removeItem("isExternal");
    sessionStorage.removeItem("host");
    sessionStorage.removeItem("fallback");
    sessionStorage.removeItem("return");
    localStorage.removeItem("facilityDetail");
    let language: any;
    if (localStorage.getItem("currentLanguage") === "undefined") {
      language = 'English';
    } else {
      language = localStorage.getItem("currentLanguage");
    }
    window.location.href = `${this.parent_url}?currentLanguage=${language}`;
    localStorage.removeItem("currentLanguage");
    // }
    // })
  }
}
