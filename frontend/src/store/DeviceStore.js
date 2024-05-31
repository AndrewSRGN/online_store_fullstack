import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Smartphone"},
            {id: 2, name: "Laptop"},
            {id: 3, name: "Tablet"},
            {id: 4, name: "Monitor"},
            {id: 5, name: "TV"},
        ];

        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"},
            {id: 3, name: "Xiaomi"},
            {id: 4, name: "Huawei"},
            {id: 5, name: "OnePlus"},
        ];

        this._devices = [
            {id: 1, name: "Apple iPhone 13", price: 1999.99, rating: 5, img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone_13_Pro_Max-og.jpg.large.jpg"},
            {id: 2, name: "Samsung Galaxy S21", price: 999.99, rating: 4, img: "https://www.samsung.com/us/smartphones/galaxy-s21/images/galaxy-s21_highlights_feature_1920x1080.jpg"},
            {id: 3, name: "Xiaomi Mi 11", price: 799.99, rating: 3, img: "https://www.mi.com/in/product/xiaomi-mi-11-5g-8gb-128gb-1.jpg"},
            {id: 4, name: "Huawei Mate 40", price: 1499.99, rating: 5, img: "https://www.gizmochina.com/wp-content/uploads/2022/11/Huawei-Mate-40-Pro-5G-768x432.jpg"},
            {id: 5, name: "OnePlus 10 Pro", price: 999.99, rating: 4, img: "https://www.gizmochina.com/wp-content/uploads/2022/11/OnePlus-10-Pro-5G-768x432.jpg"},
            {id: 6, name: "Apple MacBook Pro 16", price: 4999.99, rating: 5, img: "https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-16-2020-hero-3up-190807_big.jpg.large.jpg"},
            {id: 7, name: "Apple TV 4K", price: 199.99, rating: 4, img: "https://www.apple.com/newsroom/images/product/tv/standard/Apple_TV_4K_og.jpg.large.jpg"},
            {id: 8, name: "Samsung TV 4K", price: 299.99, rating: 3, img: "https://www.samsung.com/us/smart-tvs/galaxy-tv/galaxy-tv-4k/images/galaxy-tv-4k_highlights_feature_1920x1080.jpg"},
            {id: 9, name: "Xiaomi Smart TV 4K", price: 399.99, rating: 4, img: "https://www.mi.com/in/product/xiaomi-smart-tv-4k-65-inch-1.jpg"},
        ];

        makeAutoObservable(this);
    }

    set types(types) {
        this._types = types;
    }

    set brands(brands) {
        this._brands = brands;
    }

    set devices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
}