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

    @Test()
    public void createPilot() throws InterruptedException {
        driver.get("http://localhost:4200/space/pilots/new");
        driver.manage().window().maximize();
        driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/div[1]/input")).sendKeys("Irakli");
        driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/div[2]/input")).sendKeys("Kardava");
        driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/div[3]/input")).sendKeys("/assets/unknown-pilot.png");
        driver.findElement(By.xpath("/html/body/app-root/app-pilot-form/form/button")).click();
        assertThat(driver.getCurrentUrl(), containsString("production"));
    }
}