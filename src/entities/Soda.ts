

export interface ISoda {
    id: string;
    brand: string;
    distributor?: string;
    diet?:boolean;
    caffeine?:boolean;
    color?:string;
}
class Soda implements ISoda{
    public id:string;
    public brand:string;
    public distributor?:string;
    public diet?:boolean;
    public caffeine?:boolean;
    public color?:string;


    constructor(id:string | ISoda,brand:string,distributor?:string,diet?:boolean,caffeine?:boolean,color?:string){
        
    if (typeof id === 'string') {
        this.id=id;
        this.brand=brand,
        this.distributor=distributor || '',
        this.diet=diet||false,
        this.caffeine=caffeine||true,
        this.color=color||""
       
    }else{
        this.id = id.id,
        this.brand = id.brand,
        this.distributor = id.distributor;
        this.diet=id.diet;
        this.caffeine=id.caffeine;
        this.color= id.color;

        };

    };
};

export default Soda;
