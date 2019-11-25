import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpResponse } from "@angular/common/http";

/**
 * This component is responsible for registering new users
 */
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  /**
   * The email to be used to log in
   */
  email: "";

  /**
   * User's password
   */
  password: "";

  /**
   * String used for string interpolation
   */
  backtologin = "Back to login";

  /**
   * String used for string interpolation
   */
  register = "register";

  /**
   * String used to show if something went wrong
   */
  error: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  /**
   * These will be used to hide unwanted parts of navbar
   */
  elemProfile = document.getElementById("profile");
  elemLogout = document.getElementById("logout");

  ngOnInit() {
    /** Hides the profile button */
    this.elemProfile.style.visibility = "hidden";

    /** Hiides the logout button */
    this.elemLogout.style.visibility = "hidden";
  }

  /**
   * Takes user back to login
   */
  onBack(): void {
    this.router.navigate([""]);
  }

  /**
   * Registers user in the system
   */
  onRegister(): void {}
}
