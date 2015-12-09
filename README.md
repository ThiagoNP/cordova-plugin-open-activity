# Open Activity

It helps open a native Activity in Android environment from cordova/hybrid APPs

Call from your app:

```js
OpenActivity.open('com.modinify.bnp.FullscreenActivity', function () {
        // Call back OK
      }, 
      function () {
        / Call back ERROR
});
```

Calling callback inside of your activity

```java
import com.modinify.openactivity.OpenActivity;

    // call call back.....
    CallbackContext callbackContext = OpenActivity.getCallbackContext();

    // calling successs...
    if (isOk)
        callbackContext.success("my parameter here!");
});
```