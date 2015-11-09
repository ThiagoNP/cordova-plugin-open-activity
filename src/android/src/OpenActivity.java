package com.modinify.openactivity;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import android.content.Context;
import android.content.Intent;

public class OpenActivity extends CordovaPlugin{

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Context context=this.cordova.getActivity().getApplicationContext();
        boolean isOk = false;

        try{
            Class<?> c = Class.forName(action);
            Intent intent=new Intent(context, c);
            cordova.getActivity().startActivity(intent);
            isOk = true;
        }catch(Exception e){
            // DO nothing for while...
        }

        return isOk;
    }

}