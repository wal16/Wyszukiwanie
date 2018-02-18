package pageobjects.pages;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SignInPage {

    private WebDriver driver;

    @FindBy(css = "tab-tab-1")
    private WebElement logSide;

    @FindBy(id = "username")
    private WebElement username;

    @FindBy(id = "password")
    private WebElement password;

    @FindBy(xpath = "//button[text()='Zaloguj']")
    private WebElement logInbutton;

    @FindBy(xpath = "//a[text()='Wyloguj'")
    private WebElement logOutbutton;

    public void getUrl(String string){
        driver.get(string);
    }

    public void clickOnLogSide(){
        logSide.click();
    }
    public void setUserData(String name, String pass){
        username.sendKeys(name);
        password.sendKeys(pass);

    }




}
