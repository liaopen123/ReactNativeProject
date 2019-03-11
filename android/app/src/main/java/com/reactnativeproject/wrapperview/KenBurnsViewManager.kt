package com.reactnativeproject.wrapperview

import android.graphics.drawable.Drawable
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.flaviofaria.kenburnsview.KenBurnsView
import java.security.CodeSource

class KenBurnsViewManager : SimpleViewManager<KenBurnsView>() {
    override fun getName(): String {
        return "KenBurnsView"
    }

    private var reactContext: ThemedReactContext? = null

    override fun createViewInstance(reactContext: ThemedReactContext?): KenBurnsView {
        val kenBurnsView = KenBurnsView(reactContext)
        this.reactContext =reactContext
        return kenBurnsView
    }

    @ReactProp(name="imgSource")
   public fun setSource(view:KenBurnsView,source: String){
        val res = reactContext!!.assets.open(source)
        view.setImageDrawable(Drawable.createFromStream(res,null))

    }
}