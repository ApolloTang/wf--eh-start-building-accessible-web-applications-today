# `role=button` for a `\<div>`, handing keydown event



## Make \<div> navigatable

The following button is not navigable with tab because it is a `div` element

```html
<div
  class="button"
>
```

To fix this we add:

-  `role` to turn this `div` into a `button` for screen reader.
-  `tabindex` for tabing flow.
- `aria-label` so that screen reader can read "menu".


```html
<div
  class="button"

  role="button"
  tabindex="0"
  aria-label="Menu"
>
```



## \<div>'s onkeydown need to be explicite

But we are not done yet.  For a `\<button>`, onclick handler will fire for both click and keydown:

```HTML
<button
  aria-label="Help"
  onclick="console.log('button: clicked or keydown')"
>
  <i class="icon icon-help"></i>
</button>

```

But for `\<div>`,  click handler only fire for click event, not on keydown event:

```HTML
<div
  class="button"

  role="button"
  tabindex="0"
  aria-label="Menu"

  onclick="console.log('div: click only (does not fire on keydown)')"
>
  <i class="icon icon-menu"></i>
</div>
```

So we need to explicitely add `onkeydown` handler:

```html
<div
  class="button"

  role="button"
  tabindex="0"
  aria-label="Menu"

  onclick="console.log('div: click only (does not fire on keydown)')"
  onkeydown="console.log('div: onkeydown')"   // <--- fixed, need to explicitely add `onkeydown` handler
>
  <i class="icon icon-menu"></i>
</div>
```

