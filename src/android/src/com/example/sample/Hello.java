package com.example.sample;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

import android.util.Log;

import com.example.sample.MainActivity;

public class Hello extends CordovaPlugin
{
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		return true;
	}

}