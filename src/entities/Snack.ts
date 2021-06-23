

export interface ISnack {
    id: string;
    brand: string;
    distributor: string;
    gluten:boolean;    
    typeSnack:string;
}
class Snack implements ISnack{
    public id:string;
    public brand:string;
    public distributor:string;
    public gluten :boolean;    
    public typeSnack:string;

 
    
        
    constructor(id:string | ISnack,brand:string,distributor:string,gluten:boolean,typeSnack:string){
        
    if (typeof id === 'string') {
        this.id=id;
        this.brand=brand,
        this.distributor=distributor || '',
        this.gluten=gluten||false,      
        this.typeSnack=typeSnack||""
       
    }else{
        this.id = id.id,
        this.brand = id.brand,
        this.distributor = id.distributor;
        this.gluten=id.gluten;        
        this.typeSnack= id.typeSnack;

        };

    };
};

export default Snack;