export interface IWeather5day
{
    cod: string,
    message: number,
    cnt: number,
    list: IList[],
    city: ICity,
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number
}
export interface ICity
{
    id: number,
    name: string,
    coord: ICoord,
}
export interface ICoord
{
    lat: number,
    lon: number
}
export interface IList
{
    dt: number,
    main: IMain,
    weather: IWeather,
    clouds: IClouds,
    wind: IWind,
    visibility: number,
    pop: number,
    sys: ISys,
    dt_txt: string
}
export interface IMain
{
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number,
}
export interface IWeather
{
    id: number,
    main: string,
    description: string,
    icon: string
}
export interface  IClouds
{
    all: number
}
export interface IWind
{
    speed: number,
    deg: number,
    gust: number
}
export interface  ISys
{
    pod: string
}
