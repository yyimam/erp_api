export class CreateStockTransferDto {
    idno: number;
    EntryNo?: number;
    billno?: string;
    edate?: Date;
    sysdate?: Date;
    party_ac?: string;
    dr_cr_ac?: string;
    dcno?: string;
    estatus?: string;
    order_no?: number;
    remarks?: string;
    gst?: number;
    gstAmount?: number;
    gstinv?: string;
    gst_ac?: string;
    sed?: number;
    sedAmount?: number;
    sed_ac?: string;
    disc_p?: number;
    discount?: number;
    grossamount?: number;
    netamount?: number;
    etime?: string;
    terms?: string;
    Warehouse_Code?: string;
    doentryno?: number;
    ent_date?: Date;
    Credit_Days?: number;
    Circular_No?: number;
    Vehicle_No?: string;
    duedate?: Date;
    Vendor_No?: string;
    r_No?: string;
    rvno?: string;
    rvdate?: Date;
    Shop?: string;
    sol_com?: number;
    sol_comA?: number;
    osb_com?: number;
    osb_comA?: number;
    freight?: number;
    Transporter?: string;
    porder_no?: string;
    return_type?: string;
    oldcirno?: string;
    dincentp?: number;
    dincentamt?: number;
    dincentac?: string;
    grn_no?: number;
    dc_no?: number;
    posted?: number;
    biltyno?: string;
    mir_No?: number;
    gor_No?: string;
    container_no?: string;
    seal_no?: string;
    period?: string;
    bilty_filename?: string;
    itemdescription?: string;
    grn_closed?: number;
    fitem_code?: string;
    batch_qty?: number;
    Recipe_No?: number;
    batch_id?: string;
    batch_id_no?: number;
    mat_type?: string;
    dc_no_SR?: number;
    S_dc_no?: number;
    transporter_name?: string;
    alert_posted?: number;
    file_name?: string;
    gpno?: string;
    doc_attached?: number;
    post_date?: Date;
    billingDetails: []
}
