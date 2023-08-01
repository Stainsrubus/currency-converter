# currency-converter


Frontend currency converter application

Using API call method in js data's are fetched for country code and for convertion method.

HTML:
  ==> Class box is defined and within the box two boxes left box and right box are created using class name "currency" in select tag for dropdown box.
  ==> A input tag with type=" number" one Id as input and another one Id as result.
  ==> A convert button is added with the class name btn 

CSS:
  ==> Using padding  in  container tag a abox is created in the center of the page.
  ==> Also using various styling tags our web page is styled.

JavaScript:
  ==> Using fetch keyword data is fetched from the api's
  ==> .then - is used to convert the data into JSON format.
  ==> A function displayDropdown is created and result is get in the keyword and then passed to the function.
  ==> Using for method array elements are get by using the respective index value.
  ==> Anothe function addEvent listner is created and the datas fetched from the api in the result is then added to the respective classes created for the buttons.
  ==> Result is provide in the separate box.
