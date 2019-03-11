let events = {};


export const on = (name, handler) => {
    const listener = events[name];//通过对于的name得到监听对象
    if (!listener) {
        //如果监听器不为空 则重置监听
        events[name] = [];
    }
    //重新新增监听
    events[name].push(handler);
};


//通过事件名 将数据绑定 并触发
export const trigger = (name, data) => {
    const listener = events[name];

    for (let i = 0; i < listener.length; i++) {
        listener[i](data);
    }

};


export const remove = (name, handler) => {
    let listener = events[name];
    //find找出不等于v的所有，重新复制给events[]数组。
    events[name] = listener.find(v => v != handler);
};
