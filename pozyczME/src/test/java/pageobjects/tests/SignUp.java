package pageobjects.tests;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SignUp {


    private WebDriver driver;

    @Before
    public void setUp() {


        System.setProperty("webdriver.chrome.driver", "src/test/java/resources/chromedriver");
        driver = new ChromeDriver();
    }


    @After
    public void tearDown() { driver.close(); }
}
