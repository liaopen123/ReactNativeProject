package com.reactnativeproject.nativeview

import android.content.Context
import android.support.v7.widget.DialogTitle
import android.text.Layout
import android.util.AttributeSet
import android.view.View
import android.widget.*
import com.bumptech.glide.Glide
import com.reactnativeproject.R

class OriginalView(context: Context, attri: AttributeSet?, value: Int?) : FrameLayout(context, attri, value!!) {
    constructor(context: Context) : this(context, null, 0)
    constructor(context: Context, attri: AttributeSet?) : this(context, attri, 0)

    private var title: TextView?
    private var image: ImageView?
    private var checkBox: CheckBox?
    private var button: Button?

    init {
        View.inflate(context, R.layout.textview, this)
        title = this.findViewById<TextView>(R.id.tv_title)
        image = this.findViewById<ImageView>(R.id.iv_image)
        checkBox = this.findViewById<CheckBox>(R.id.ck_box)
        button = this.findViewById<Button>(R.id.btn_button)
    }


    fun setTitle(title: String) = this.title!!.setText(title)
    fun setImage(resource: String) = Glide.with(context).load(resource).into(this.image!!)
    fun setCheckBoxState(state: Boolean) = { this.checkBox!!.isChecked = state }
    fun setBottonText(content: String) = {
        this.button!!.setText(content)
        Toast.makeText(context, content, Toast.LENGTH_LONG).show()
    }
}