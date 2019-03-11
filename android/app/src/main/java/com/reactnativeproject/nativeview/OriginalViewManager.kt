package com.reactnativeproject.nativeview

import android.view.ViewManager
import android.widget.Toast
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class OriginalViewManager : SimpleViewManager<OriginalView>() {
    override fun getName(): String {
        return "OriginalView"
    }

    private var reactContext: ThemedReactContext? = null

    override fun createViewInstance(reactContext: ThemedReactContext?): OriginalView {
        this.reactContext = reactContext
        return OriginalView(reactContext!!)
    }

    @ReactProp(name = "title")
    fun setTitle(view: OriginalView, title: String) {
        view.setTitle(title)
    }

    @ReactProp(name = "imageUri")
    fun setImageUri(view: OriginalView, imageuri: String) {
        view.setImage(imageuri)
    }

    @ReactProp(name = "checkBoxState")
    fun setCheckBoxState(view: OriginalView, state: Boolean) {
        view.setCheckBoxState(state)
    }

    @ReactProp(name = "buttonContent")
    fun setBottonContent(view: OriginalView, content: String) {
        view.setBottonText(content)
        Toast.makeText(view.context,content,Toast.LENGTH_LONG).show()
    }

}