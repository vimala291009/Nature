package com.nature.pageobjects;

import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.interactions.*;

import java.lang.*;




public class ChangePasswordPage {

    WebDriver browser = new FirefoxDriver();



    public void clickchangepassword() {
        browser.get("http://www.nature.com/changepasswordpage");
    }

    public void enternewpassword(String pass) {
        browser.findElement(By.id("changepass")).sendKeys(pass);
        browser.findElement(By.id("confirmchangepass")).sendKeys(pass);
    }

    public void submitnewpassword() {
        browser.findElement(By.id("submit")).submit();
    }

    public boolean verifywarningmsg(String behave) {
        boolean vish = browser.findElement(By.id("warning")).getText().equals(null);
        return vish;
    }
}