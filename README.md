# survey-form
This is a project focuses on design and implementation of WWW forms at professional quality in terms of design, implementation, dealing with user errors, field validation, robot attackss, and cross browser and platform compatibility and usability. It contains WWW data survey form and WWW results verification form. Users will start from the data survey form by putting their information, and they can verify their input results after submitting the survey form. 


# How to run this project
1. Download this project to local
2. Open this project in Visual Studio Code
3. Go to extension section, install "Live Server". (This step makes sure Google ReCaptcha works properly.)
4. Right click the "index.html" file, and click "Open with Liver Server" to open data sruvey form.
5. You can also reach my form though the URL: https://nianziyi.github.io/survey-form/    (This uses my own designed captcha insetad of google ReCaptcha)


# Automated Testing
I used Selenium and TestNG framework to test this survey form automately. Here is the link to my testing repository: https://github.com/NianziYi/data-survey-form-testing

Test cases:
1. test if user can reach to correct form with given link
2. test if user can fill the form
3. test if user can submit the form
4. test if user's input can be captured correctly in result page
5. test if map can be displayed in result page

Test result:
![Alt text](testResult.png?raw=true "Test Result")


# Tools used in this project
1. For the development, I used Bootstrap 
2. For field validation, I used Bootstrap Validation
3. For maps, I used Embed Google Map
4. For captcha, I used Google RECaptcha 
5. For testing, I used Selenium and TestNG framework to do automated testing
