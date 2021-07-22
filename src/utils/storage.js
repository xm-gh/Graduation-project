// 设置持久化存储的数据（账号密码）
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}
// 获取持久化存储的数据（账号密码）
export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}
// 移除持久化存储的数据（账号密码）
export const removeStore = name => {
    if(!name) return;
    window.localStorage.removeItem(name);
}