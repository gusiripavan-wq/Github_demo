import {test} from '@playwright/test'

test ('login test',async({page})=>{
  
    await page.goto("http://orangehrm.qedgetech.com/")
    await page.locator("#txtUsername").fill("Admin")
    await page.locator("#txtPassword").fill("Qedge123!@#")
    await page.locator("#btnLogin").click()
    await page.locator("#welcome").click()
    await page.locator("/html/body/div[1]/div[1]/div[10]/ul/li[4]/a").click()






})
