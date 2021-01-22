import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.MatcherAssert.assertThat;

public class TestImplementation {

    private WebDriver driver;

    @BeforeClass
    public static void setupWebdriverChromeDriver() {
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\src\\test\\resources\\chromedriver.exe");
    }

    @Before
    public void setup() {
        driver = new ChromeDriver();
    }

    @After
    public void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }

    /**
     * Feature: Create pilot
     * <p>
     * Scenario: Not empty fields is accepted
     * Given Navigate to Hangar space pilots new
     * When A User enters pilot name
     * When A User enters pilot surname
     * And A User clicks on save button
     * Then Application navigate to production page
     *
     * @throws InterruptedException
     */
    @Test()
    public void createPilot() throws InterruptedException {
        String expectedUrl = "http://localhost:4200/space/production";
        driver.get("http://localhost:4200/space/pilots/new");
        driver.manage().window().maximize();
        driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/div[1]/input")).sendKeys("Irakli");
        driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/div[2]/input")).sendKeys("Kardava");
        driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/div[3]/input")).sendKeys("/assets/unknown-pilot.png");
        driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/button")).click();
        Thread.sleep(3000);
        Assert.assertEquals(expectedUrl, driver.getCurrentUrl());
    }


    /**
     * Feature: Create pilot
     * <p>
     * Scenario: Name field is empty
     * Given Navigate to Hangar space pilots new
     * When A User enters does not enter pilot name
     * And User cant click button
     * Then Application shows error info
     *
     * @throws InterruptedException
     */
    @Test()
    public void emptyNameField() throws InterruptedException {
        driver.get("http://localhost:4200/space/pilots/new");
        driver.manage().window().maximize();
        driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/div[1]/input")).sendKeys("");
        Thread.sleep(3000);
        assertThat(driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/div[1]/span")).getText(), containsString("Enter pilot name"));
    }

    /**
     * Feature: Create pilot
     * <p>
     * Scenario: Surname field is empty
     * Given Navigate to Hangar space pilots new
     * When A User enters does not enter pilot surname
     * And User cant click button
     * Then Application shows error info
     *
     * @throws InterruptedException
     */
    @Test()
    public void emptySurnameField() throws InterruptedException {
        driver.get("http://localhost:4200/space/pilots/new");
        driver.manage().window().maximize();
        driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/div[2]/input")).sendKeys("");
        Thread.sleep(3000);
        assertThat(driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/div[2]/span")).getText(), containsString("Enter pilot surname"));
    }

    /**
     * Feature: Create pilot
     * <p>
     * Scenario: form fields are empty
     * Given Navigate to Hangar space pilots new
     * When A User does not enter pilot name
     * When A User does not enter pilot surname
     * And User cant click button because it is disabled
     *
     * @throws InterruptedException
     */
    @Test()
    public void formSaveButtonIsDisabled() throws InterruptedException {
        driver.get("http://localhost:4200/space/pilots/new");
        driver.manage().window().maximize();
        driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/div[1]/input")).sendKeys("");
        driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/div[2]/input")).sendKeys("");
        Thread.sleep(3000);
        assert(driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/button")).isDisplayed());
    }


}