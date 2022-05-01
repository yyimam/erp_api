export declare class CreatefinishGoodsRecipeListDto {
    idno: number;
    mainitemcode: string;
    disabled: boolean;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    finishGoodsRecipeList: [
        {
            idno: number;
            assembling_master_code: string;
            mainitemcode: string;
            subitemcode: string;
            description: string;
            qty: number;
            sysdate: Date;
            entryno: number;
            edate: Date;
            disabled: boolean;
            wastage_qty: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date;
        }
    ];
}
