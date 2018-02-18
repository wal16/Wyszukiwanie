package pageobjects.tests;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;
import pageobjects.pages.SignInPage;

import java.util.concurrent.TimeUnit;

public class SignIn {

    private WebDriver driver;
    private static final String url = "http://app.pinapple.jdqz1.is-academy.pl/";
    private SignInPage signIn = PageFactory.initElements(driver, SignInPage.class);

    @Before
    public void setUp() {

        System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver");
        driver = new ChromeDriver();
    }

    @Test
    public void testLoginwithGoodData() {

        signIn.getUrl(url);
        signIn.clickOnLogSide();
        signIn.setUserData("aaaaa", "12345");

        WebElement submitLogin = driver.findElement(By.xpath("//button[text()='Zaloguj']"));
        submitLogin.click();
        WebDriverWait wait = new WebDriverWait(driver, 10);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        String logOut = driver.findElement(By.xpath("//a[text()='Wyloguj'")).getText();
        assertTrue(logOut.equals("Wyloguj"));


    }
//
//    @After
//    public void tearDown() { driver.close(); }
}
