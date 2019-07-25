export default class Storage{
    store(key, data){
        try {
            localStorage.setItem(
                key, data
            );
        } catch (error) {
            console.error("LocalStorage Manager :: ", error);
        }
    }
    load(key) {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            console.error("LocalStorage Manager :: ", error);
        }
    }
    remove(){
        try {
            return localStorage.clear();
        } catch (error) {
            console.error("LocalStorage Manager :: ", error);
        }
    }
}