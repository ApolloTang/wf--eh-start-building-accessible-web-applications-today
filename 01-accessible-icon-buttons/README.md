# Add a11y to icon buttons



## Add a11y to icon

```html
      <button>
        <i
          class="icon icon-help"
        ></i>
      </button>
```

Fixed: strategy one:

```html
      <button>
        <span class="visuallyhidden">Help!</span>  // tells screen readers to read "help" but is hidden to human that can see.
        <i
          class="icon icon-help"
          aria-hidden="true"                       // tells screen to ignore icon
        ></i>
      </button>
```

Fixed: strategy two:

```HTML
      <button
        aria-label="Help!"        // provide the screen readers a text for the element that has no visible text
      >
        <i
          class="icon icon-help"
          aria-hidden="true"      // tells screen to ignore icon
        ></i>
      </button>
```

[REF `aria-label`](https://www.aditus.io/aria/aria-label/) 

Additional reference: [link](https://stackoverflow.com/questions/22039910/what-is-aria-label-and-how-should-i-use-it)





---

## Add a11y to svg

```HTML
      <div
        class="button"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          class="icon"
        >
          <path d="..." ></path>
        </svg>
      </div>
```

Fixed

```HTML
      <div
        class="button"
        role="button"  // Tell the screen readers this div is a button.
        tabindex="0"   // I do not know how to explain this :(
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          class="icon"
          aria-labelledby="svgtitle"         // aria-labelledby is used to reference any label already present in the page (In this case the SVG title).
        >
          <title id="svgtitle">Help!</title> // This SVG title is reference by the aria-labelledby.
          <path d="..." ></path>
        </svg>
      </div>
```

