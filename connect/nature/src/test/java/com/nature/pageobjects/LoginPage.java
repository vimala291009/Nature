package com.nature.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;





public class LoginPage {

    WebDriver browser = new FirefoxDriver();


    public void opennature() {
        browser.get("http://www.nature.com/foxtrot/svc/login");
    }

    public void submitlogindetails(){
        browser.findElement(By.id("username")).sendKeys("user01");
        browser.findElement(By.id("password")).sendKeys("pass01");
        browser.findElement(By.id("submit")).submit();
    }

  }
