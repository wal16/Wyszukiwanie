package pageobjects.tests;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SearchFor {


    private WebDriver driver;

    @Before
    public void setUp() {


        System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver");
        driver = new ChromeDriver();
    }

    @Test
        public void addToSearch(){
        driver.get("http://app.pinapple.jdqz1.is-academy.pl/games-list");
        WebDriverWait wait = new WebDriverWait(driver, 30);
        WebElement pageSearch = driver.findElement(By.xpath("//*[@id='search']"));
    }




    @After

    public void tearDown() {
        driver.close();
    }
}
