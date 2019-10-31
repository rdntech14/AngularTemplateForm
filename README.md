Angular Forms
=====

Angular has two types of Forms 

1) Template Driven Forms
2) Reactive Forms

## Template Driven Forms

*Note : 
we need to import FormsModule for template driver forms
we need to import ReactiveFroms for Reactive froms*

to access the form values, we need to use

1) We need to create form refernce using template reference varilable (#userName) assiging to ngForm. 
Templete reference varialble have "value" property that will have all form control values. 
Here input tag is a form control that user wants to track. 

2) ngModel directive has to be added to form controls that needs to be tracked and must have name property.


ngForm is used.
ngSubmit is used.
ngModel will be used to send data from view to .ts.

##Data Binding to variables

Steps:

1) use ngForm directive at form tag and assign it to reference variable
2) pass form refernce varilable to click event method
3) add name properties to input fields ( input, select checkbox, textbox whateven can collect user inputs)
4) add ngModel to the input tag whose values need to be sent to .ts file.

```
<!-- ngModel - DataBinding to variables -->

<form (ngSubmit)="onSubmit(myForm)" #myForm="ngForm">
  <input type="text" name=username ngModel><br />
  <input type="text" name=password ngModel><br />
  <button type="submit" class="btn btn-primary">Submit</button><br />
</form>

```
.ts file
```

  onSubmit(myForm) {
    console.log(myForm);
    console.log(myForm.value.username);
  }
  
  
```

##Data Binding to model class object variables

```
<!-- ngModel - DataBind to model class object variables -->

<form (ngSubmit)="onSubmit1(myForm1)" #myForm1="ngForm">
  <input type="text" name="username1" [(ngModel)]="userO.usr"><br />
  <input type="text" name="password1" [(ngModel)]="userO.pwd"><br />
  <button type="submit" class="btn btn-primary">Submit</button><br />
</form>

```
.ts file
  
```
export class AppComponent {

  userO = new User();
  userO = new User();
  
  onSubmit1(myForm1:NgForm) {
    console.log(myForm1.value.username1);
    console.log(this.userO.usr);
  }
}

export class User{
    usr:string;
    pwd:string;
}
```

**Form Control & Form Group**

Just as a form control instance gives you control over a single input field, a form group instance tracks the form state of a group of form control instances (for example, a form). Each control in a form group instance is tracked by name when creating the form group.



**Tracking State and Validitiy**

Video : https://www.youtube.com/watch?v=WyWJwR0FJV0&list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&index=7

to get the state of DOM, Angular provides few classes along with properties

![Alt text](/ControlState.png?raw=true "Optional Title")

![Alt text](/ngModelStateClassAndProperty.png?raw=true "Optional Title")

to get reference of DOM element, add template reference variable (example  #trvName)

```
<input type="text" name="username" [(ngModel)]="employee.firstname" #trvName>
{{  trvName.class }}
```
This will show few classes from above list 

In order to get access to the properties, we need to assign ngModel to template refernece variable

```
<input type="text" name="username" [(ngModel)]="employee.firstname" #trvName="ngModel">
{{  trvName.untouched }}
```
this may return true or false

#Steps for Template Driven Form

1) Add `#myForm="ngForm"` to form tag 
2) Element must have ngModel directive
3) Element must have name properties

```
<input type="text" name="username" ngModel>
```
We may add submit method following ways:
1)At form level `<form (ngSubmit)="addToCartMethod()" #myForm="ngForm">`  2) or at submit button level `<button type="submit" (click)="addToCartMethod()">Add to Cart</button>`


