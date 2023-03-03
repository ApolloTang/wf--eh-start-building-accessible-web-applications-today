## Using implicit labelling to associate `<input>` the `text` element

Before fix:

```html
      <form action="">
        Your name
        <input type="text" />
      </form>
```

Fixed with implicit labelling, i.e., wrap the `text` and `<input>` in the `<label>` element:

```html
      <form action="">
        <label>
          Your name
          <input type="text" />
        </label>
      </form>
```

After the fixed, when you click the text (`Your name`) the `<input type="text" />` will be focused.



## Using implicit labelling with radio button

Similary for the radio button, we can apply the implicit labelling technique:

Before fix:

```html
      <form action="">
        <div>
          <input type="radio" name="animals" />
          Dog
        </div>
        <div>
          <input type="radio" name="animals" />
          Cat
        </div>
        <div>
          <input type="radio" name="animals" />
          Polar bear
        </div>
      </form>
```

Fixed:

```HTML
      <form action="">
        <div>
          <label>
            <input type="radio" name="animals" />
            Dog
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="animals" />
            Cat
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="animals" />
            Polar bear
          </label>
        </div>
     </form>
```



## Using the `for-id` to associate the `<input>` with  the `<label>`

Sometime due to design constrain, we cannot wrap the  the `text` and `<input>` in the `<label>` element.  We can solve this by using the `for-id` to associate the `<input>` with  the `<label>`:

```html
      <form action="">
        <div class="label-wrap">
          Hometown
        </div>
        <div class="input-wrap">
          <input type="text"/>
        </div>
      </form>
```

```html
      <form action="">
        <div class="label-wrap">
          <label for="hometown"> Hometown </label>
        </div>
        <div class="input-wrap">
          <input type="text" id="hometown" />
        </div>
      </form>
```



## Grouping radio button with `<fieldset>` and `<legend>`

Before fix:

```html
      <form action="">

        <p>Favorite animal</p>

        <div>
          <label><input type="radio" name="animals" />Dog</label>
        </div>
        <div>
          <label><input type="radio" name="animals" />Cat</label>
        </div>
        <div>
          <label><input type="radio" name="animals" />Polar bear</label>
        </div>

     </form>
```

After fixed:

```html
      <form action="">
        <fieldset>

          <legend>Favorite animal</legend>

          <div>
            <label><input type="radio" name="animals" />Dog</label>
          </div>
          <div>
            <label><input type="radio" name="animals" />Cat</label>
          </div>
          <div>
            <label><input type="radio" name="animals" />Polar bear</label>
          </div>

        </fieldset>

      </form>
```

