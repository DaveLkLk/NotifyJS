import { NotifyModel } from "./notify.js";

const btn = document.querySelector('#click')
const Notify = new NotifyModel()

// Ejemplo de uso
let count = 0
btn.addEventListener('click', ()=>{
    count++
    if(count === 5){
        Notify.title = 'Time 1 count: '+ count,
        Notify.description = 'Notificación de prueba: '+count;
        Notify.classname = Notify.tipoClase.ERROR,
        Notify.temporal = true;
        Notify.time = 2000
        Notify.showNotify()
        return
    }
    if(count === 7 || count === 9){
        Notify.title = 'TIME 2 count: '+count,
        Notify.description = 'Notificación de prueba '+count;
        Notify.classname = Notify.tipoClase.WARNING;
        Notify.temporal = true;
        console.log(Notify.time)
        Notify.showNotify()
        return
    }
    if(count === 10){
        Notify.title = 'TIME 3 count: '+count,
        Notify.description = 'Notificación con contador '+count;
        Notify.classname = Notify.tipoClase.SUCCESS,
        Notify.temporal = false;
        Notify.showNotify()
        count = 0;
        return
    }
    Notify.title = 'NOTIFY TEST: '+ count,
    Notify.description = 'Notificación de prueba';
    Notify.classname = Notify.tipoClase.INFO,
    Notify.temporal = true;
    Notify.time = 4000
    Notify.showNotify()
})
