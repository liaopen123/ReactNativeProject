package com.reactnativeproject.nativeview

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import java.util.*

class   OriginalPackage :ReactPackage{
    override fun createNativeModules(reactContext: ReactApplicationContext?): MutableList<NativeModule> {
        return Collections.emptyList()
    }

    override fun createViewManagers(reactContext: ReactApplicationContext?): MutableList<OriginalViewManager>? {
        return Arrays.asList(OriginalViewManager())
    }

}