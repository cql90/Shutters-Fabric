import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from "react-bootstrap";
import "../style.css";
import "../styleCustom.css";
import Table from 'react-bootstrap/Table';

import dataMainForm from "../data/dataMainForm.json";
import TextBoxComponentExt from '../Components/TextBoxComponentExt';
import RadioButtonComponentExt from '../Components/RadioButtonComponentExt';
import SelectComponentExt from '../Components/SelectComponentExt';
import TableDetailMain from '../Components/TableComponent';
import { showInsideOutsideFrame } from '../utilities/ShowHideInsideOutsideFrame'
import { showHideDividerSplit } from '../utilities/ShowHideDividerSplit'

const dataMain = JSON.parse(JSON.stringify(dataMainForm))
const fieldNumberOnly =  (/^(([0-9.]?)*)+$/)

const MainComponent = ({formInfo, formState}) => {
    const [showInsideFrame, setShowInsideFrame] = useState(true)
    const [showOutsideFrame, setShowOutsideFrame] = useState(false)
    const [showDividerSplit, setShowDividerSplit] = useState(false)
    const [showHideTable, setShowHideTable] = useState(false)
    const [dataForTables, setDataForTables] = useState([])
    const [dataOrders, setDataForOrders] = useState([])

    const[width, setWidth] = useState('')
    const[length, setLength] = useState('')
    const[finishWidth, setFinishWidth] = useState('')
    const[finishLength, setFinisLength] = useState('')
    const[sillWidth, setSillWidth] = useState('')
    const[measurement, setMeasurement] = useState('')
    const[instruction, setInstruction] = useState('')
    const[hingeChoice, sethingeChoice] = useState('')
    const[mount, setMount] = useState('')
    const[louver, setLouver] = useState('')
    const[panel, setPanel] = useState('')
    const[insideFrame, setInsideFrame] = useState('')
    const[outsideFrame, setOutsideFrame] = useState('')
    const[color, setColor] = useState('')
    const[rail, setRail] = useState('')
    const[dividerSplitOption, setDividerSplitOption] = useState('')
    const[dividerSplitSize, setDividerSplitSize] = useState('')
    const[choice, setChoice] = useState('')
    const[frame, setFrame] = useState('')
    const[numOfFrame, setNumOfFrame] = useState('')
    const[disable, setDisable] = useState(true)
    const[disableInvoiceField, setDisableInvoiceField] = useState(false)

    const[customerId, setCustomerId] = useState('')
    const[customerName, setCustomerName] = useState('')
    const[saleManId, setSaleManId] = useState('')
    const[saleManName, setSaleManName] = useState('')
    const[companyId, setCompanyId] = useState('')
    const[invoiceId, setInvoiceId] = useState('')
    const[showError, setShowError] = useState(false)
    const[newInvoice, setNewInvoice] = useState(false)
    const[useExistingInvoice, setUseExistingInvoice] = useState('')

   
    // update single field in the array of object
    const updateInvoiceValue = ((newValue) => {
        const newDataOrders = dataOrders.map(dataOrder => {
            // Return new dataOrder
            return {
                ...dataOrder,
                invoice_id: newValue
            };
        });
          // updated old array with the new array
          setDataForOrders(newDataOrders);
    })
    // only allow number and one dot
    const handleNumberAndDotOnly = ((e) => {
        e.currentTarget.value = e.currentTarget.value.replace(/[^\d\.]/g, "") .replace(/\./, "x") .replace(/\./g, "") .replace(/x/, ".");
    })

    const handleInvoiceChange = ((e) => {
        if(useExistingInvoice !== ''){
            e.currentTarget.value = useExistingInvoice
            return
        }
        setInvoiceId(e.currentTarget.value)
        sessionStorage.setItem('invoice_id', e.currentTarget.value)
        updateInvoiceValue(e.currentTarget.value)
    })

    const handleWidthChange = ((e) => {
        setWidth(e.currentTarget.value)
        handleNumberAndDotOnly(e)
    })

    const handleLengthChange = ((e) => {
        setLength(e.currentTarget.value)
        handleNumberAndDotOnly(e)
    })

    const handleFinishWidthChange = ((e) => {
        setFinishWidth(e.currentTarget.value)
        handleNumberAndDotOnly(e)
    })

    const handleFinishLengthChange = ((e) => {
        setFinisLength(e.currentTarget.value)
        handleNumberAndDotOnly(e)
    })

    const handleSillWidthChange = ((e) => {
        setSillWidth(e.currentTarget.value)
        handleNumberAndDotOnly(e)
    })

    const handleMeasurementChange = ((e) => {
        setMeasurement(e.currentTarget.value)
    })

    const handleInstructionChange = ((e) => {
        setInstruction(e.currentTarget.value)
    })

    const handlehingeChoiceChange = ((e) => {
        sethingeChoice(e.currentTarget.value)
    })

    const handleMountChange = ((e) => {
        setMount(e.currentTarget.value)
        showInsideOutsideFrame(e.currentTarget.value, setShowInsideFrame, setShowOutsideFrame)
    })

    const handleLouverChange = ((e) => {
        setLouver(e.currentTarget.value)
    })

    const handlePanelChange = ((e) => {
        setPanel(e.currentTarget.value)
    })

    const handleInsideFrameChange = ((e) => {
        setInsideFrame(e.currentTarget.value)
    })

    const handleOutsideFrameChange = ((e) => {
        setOutsideFrame(e.currentTarget.value)
    })

    const handleColorChange = ((e) => {
        setColor(e.currentTarget.value)
    })

    const handleRailChange = ((e) => {
        setRail(e.currentTarget.value)
    })

    const handleDividerSplitOptionChange = ((e) => {
        setDividerSplitOption(e.currentTarget.value)
        showHideDividerSplit(e.currentTarget.value, setShowDividerSplit)
    })

    const handleDividerSplitSizeChange = ((e) => {
        setDividerSplitSize(e.currentTarget.value)
    })

    const handleChoiceChange = ((e) => {
        setChoice(e.currentTarget.value)
    })

    const handleFrameChange = ((e) => {
        setFrame(e.currentTarget.value)
    })

    const handleNumOfFrameChange = ((e) => {
        setNumOfFrame(e.currentTarget.value)
    })

    const setFormInfoSaleManId = (() => {
        setSaleManId(sessionStorage.getItem('sale_man_id'))
    })

    const setFormInfoSaleManName = (() => {
        setSaleManName(sessionStorage.getItem('sale_man_name'))
    })
    
      const setFormInfoCustomerId = (() => {
        setCustomerId(sessionStorage.getItem('customer_id'))
    })
    
    const setFormInfoCustomerName = (() => {
        setCustomerName(sessionStorage.getItem('customer_name'))
    })

    const setFormInfoInvoiceId = (() => {
        setInvoiceId(sessionStorage.getItem('invoice_id'))
    })

    const setFormInfoCompanyId = (() => {
        setCompanyId(sessionStorage.getItem('company_id'))
    })

    const initializeFields = (() => {
        // if use existing invoice, disable invoice field and populate invoice # for invoice field
        let checkInvoice = ''
        const customerInvoiceRecord = JSON.parse(sessionStorage.getItem('single_customer_invoice'))
        if(customerInvoiceRecord !== null && customerInvoiceRecord !== undefined) {
            checkInvoice = sessionStorage.getItem('invoice')
            if(checkInvoice === 'reuse'){
                setUseExistingInvoice(customerInvoiceRecord.invoice_id)
            }
            setCustomerName(customerInvoiceRecord.customer_first_name + ' ' + customerInvoiceRecord.customer_last_name)
            setSaleManName(customerInvoiceRecord.sale_man_name)
        }
    })
    
    useEffect(() => {
        setFormInfoSaleManId()
        setFormInfoSaleManName()
        setFormInfoCustomerId()
        setFormInfoCustomerName()
        setFormInfoCompanyId()
        setFormInfoInvoiceId()
        initializeFields()
    }, [])

    const initialValues = {
        dividerSplitSize: ""
    };

    const showHideError = ((show) => {
      setShowError(show)
    })
    
    const OrderInfo = {
        invoice_id: "",
        customer_id: ""
    }

    const InvoiceInfo = {
        invoice_id: "",
        customer_id: "",
        sale_man_id: ""
    }

    const setInvoiceInfo = (() => {
        InvoiceInfo.invoice_id = invoiceId
        InvoiceInfo.customer_id = customerId
        InvoiceInfo.sale_man_id = saleManId
        return InvoiceInfo
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            dividerSplitSize: initialValues.dividerSplitSize,
        }
    });

    const checkOrderExisted = async () => {
        OrderInfo.invoice_id = invoiceId
        OrderInfo.customer_id = customerId
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(OrderInfo)
        }
        const data = await fetch('http://127.0.0.1:8000/order_existed', requestOptions)
        const res = await data.json()
        return res
    }  

    const calculate = (async () => {
        // check if invoice already existed
        const resCheck = await checkOrderExisted()
        // if resOrder.detail is valid, it means the invoice_id already in database
        if(!newInvoice){
            if(resCheck !== undefined && resCheck.detail) {
                setShowError(true)
                return
            }
        }
        setShowError(false)
        let index = dataForTables.length
        const dataTable = {
            id: index,
            width: width,
            length: length,
            hingeChoice: hingeChoice,
            panel: panel,
            outsideFrame: outsideFrame,
            insideFrame: insideFrame,
            numOfFrame: numOfFrame
        }
        const dataOrder = {
            id: index,
            invoice_id: invoiceId,
            sale_man_id: saleManId,
            customer_id: customerId,
            width: width,
            length: length,
            finishWidth: finishWidth,
            finishLength: finishLength,
            sillWidth: sillWidth,
            measurement: measurement,
            instruction: instruction,
            hingeChoice: hingeChoice,
            mount: mount,
            louver: louver,
            panel: panel,
            outsideFrame: outsideFrame,
            insideFrame: insideFrame,
            color: color,
            rail: rail,
            dividerSplitOption: dividerSplitOption,
            dividerSplitSize: dividerSplitSize,
            choice: choice,
            frame: frame,
            numOfFrame: numOfFrame
        }
        setDataForTables([...dataForTables, dataTable])
        setDataForOrders([...dataOrders, dataOrder])
        setShowHideTable(true)
        setDisable(false)
    })    

    const sendOrders = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataOrders)
        }
        const data = await fetch('http://127.0.0.1:8000/order', requestOptions)
        const resOrders = await data.json()
        return resOrders
    }

    const createInvoice = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(setInvoiceInfo())
        }
        const data = await fetch('http://127.0.0.1:8000/invoice_object', requestOptions)
        const resInvoice = await data.json()
        return resInvoice
    }

    const onSubmit = async  (data, e) => {
        if(e.nativeEvent.submitter.name == "calculate"){
            calculate()
            return
        }
        const resCheck = await checkOrderExisted()
        // if resOrder.detail is Not Found, it means the invoice_id need to create
        if(resCheck !== undefined && resCheck.detail === undefined) {
            const resInvoice = createInvoice()
            if(resInvoice !== undefined ){
                setNewInvoice(true)
                // Save new Order, send orders to server endpoint
                setTimeout(() => {
                    const resOrders = sendOrders()
                    console.log(resOrders)
                }, 100);
                // const resOrders = await sendOrders()
                console.log(resInvoice)
            }
        }
        setDisableInvoiceField(true)
    };  

    return (  
        <div className="app">
            <form onSubmit={handleSubmit(onSubmit)} > 
            {/* Customer Info */}
            <div style={{display: 'inline-block'}}>
                <div className="form-control">
                    <div className="form-main-position">
                        <fieldset type="customer">
                            <div className="div-horizontal-spacing"></div>
                            <div className="classdiv div-parent" >
                                <label className="label-main-small">Invoice</label>
                                <input id={dataMain[0][0].id} classdiv="div-textbox-main" {...register("invoiceNumber", { required: true })} name="invoiceNumber" type="text-main" disabled={disableInvoiceField} 
                                value={useExistingInvoice} onChange={handleInvoiceChange}/>
                            </div>
                            <div className="div-horizontal-spacing"></div>
                            <TextBoxComponentExt id={dataMain[0][1].id} disabled classdiv="div-textbox-main" classlabel="label-main" label={dataMain[0][1].name} name={dataMain[0][1].value} type="text-main" fieldvalue={customerName}/>
                            <div className="div-horizontal-spacing"></div>
                            <TextBoxComponentExt id={dataMain[0][2].id} disabled classdiv="div-textbox-main" classlabel="label-main" label={dataMain[0][2].name} name={dataMain[0][2].value} type="text-main" fieldvalue={saleManName}/>
                        </fieldset>        
                    </div>
                </div>    
                {/* controls need input from user */}
                <div className="form-control">
                    <div className="form-main-position">
                    {/* Width */}    
                        <div className="div-textbox-main">
                            <fieldset type="small">  
                            <legend type="small">Width</legend>
                                <div className="classdiv div-parent" >
                                    <label className="label-main-small">Width</label>
                                    <input type="text-main-small" name="width" {...register("width", { required: true })} id={dataMain[2][0].id} classdiv="div-textbox-main" classlabel="label-main-small" 
                                    onChange={handleWidthChange}/>
                                </div>
                                <div className="div-vertical-spacing"></div>
                                <div className="classdiv div-parent" >
                                    <label className="label-main-small">Length</label>
                                    <input type="text-main-small" name="length" {...register("length", { required: true })} id={dataMain[2][1].id} classdiv="div-textbox-main" classlabel="label-main-small"  
                                    onChange={handleLengthChange}/>
                                </div>
                                <div className="div-vertical-spacing"></div>
                                <div className="classdiv div-parent" >
                                    <label className="label-main-small">Finish Width</label>
                                    <input type="text-main-small" name="finishWidth" id={dataMain[2][2].id} classdiv="div-textbox-main" classlabel="label-main-small"  
                                    onChange={handleFinishWidthChange}/>
                                </div>                    
                                <div className="div-vertical-spacing"></div><br></br><div className="div-vertical-spacing"></div>
                            </fieldset>
                        </div>
                    {/* Length */}    
                        <div className="div-textbox-main">
                            <fieldset type="small">  
                            <legend type="small">Length</legend>
                                <div className="classdiv div-parent" >
                                    <label className="label-main-small">Finish Length</label>
                                    <input type="text-main-small" name="finishLength" id={dataMain[2][3].id} classdiv="div-textbox-main" classlabel="label-main-small"  
                                    onChange={handleFinishLengthChange}/>
                                </div>
                                <div className="div-vertical-spacing"></div>
                                <div className="classdiv div-parent" >
                                    <label className="label-main-small">Sill Width</label>
                                    <input type="text-main-small" name="sillWidth" id={dataMain[2][3].id} classdiv="div-textbox-main" classlabel="label-main-small"  
                                    onChange={handleSillWidthChange}/>
                                </div>
                                <div className="div-vertical-spacing"></div>
                                <TextBoxComponentExt style={{visibility: "hidden"}} classdiv="div-textbox-main" classlabel="label-main-small" label="" name="dummy" type="text-main-small" />                    
                                <div className="div-vertical-spacing"></div><br></br><div className="div-vertical-spacing"></div>
                            </fieldset>
                        </div>
                    {/* Measurement Type */}
                        <div className="div-textbox-main">
                        <fieldset>  
                        <legend type="big">Measurement Type</legend>
                            <RadioButtonComponentExt name="measurement" display="" options={dataMain[1]} selectchange={handleMeasurementChange}/>
                            <div className="div-vertical-spacing"></div>
                            <TextBoxComponentExt className="textBox-show" classdiv="div-textbox-main" classlabel="label-main-small" label="" name="dummy" type="text-main-small" />
                            <div className="div-vertical-spacing"></div>
                            <br></br><br></br><br></br>
                        </fieldset>
                        </div>
                {/* Instruction */}
                    <div className="div-textbox-main">
                    <fieldset>  
                    <legend type="medium">instruction</legend>
                        <textarea className="text-area" classdiv="div-textbox-main" classlabel="label-main-small" label="" 
                        name={dataMain[3][0].value} type="textarea" row="4" onChange={handleInstructionChange}/>
                        <div className="div-vertical-spacing"></div>
                        {/* <TextBoxComponent className="textBox-show" classdiv="div-textbox-main" classlabel="label-main-small" label="" name="dummy" type="text-main-small" />                     */}
                         <div className="div-vertical-spacing-2"></div><div className="div-vertical-spacing-5"></div> 
                    </fieldset>
                    </div>
                {/* Hings Choice */}
                    <div className="div-textbox-main" style={{'marginTop': 0}}>
                    <fieldset>  
                    <legend type="big">Hings Choice</legend>
                        <RadioButtonComponentExt name="hingeChoice" display="" options={dataMain[16]} selectchange={handlehingeChoiceChange} />
                        <div className="div-vertical-spacing-3"></div><div className="div-vertical-spacing"></div>
                    </fieldset>
                    {/* <br></br> */}
                    </div>
                    <div className='div-spacing-between-rows' />    
                    </div>
                </div>    
            </div>  
            <div style={{display: 'inline-block'}}>
                <div className="form-control">
                    <div className="form-main-position">
                    {/* Mount */}
                        <div className="div-textbox-main">
                        <fieldset>  
                        <legend type="small" className="legend-margin-bottom">Mount</legend>
                            <RadioButtonComponentExt name="mount" display="" options={dataMain[4]} selectchange={handleMountChange} />
                        </fieldset>
                        </div>
                    {/* Louver Size */}
                        <div className="div-textbox-main">
                        <fieldset>  
                        <legend type="big">Louver Size</legend>
                            <RadioButtonComponentExt name="louverSide" display="" options={dataMain[5]} selectchange={handleLouverChange} />
                        </fieldset>
                        </div>
                    {/* Panel */}
                        <div className="div-textbox-main">
                        <fieldset>  
                        <legend type="small" className="legend-margin-bottom">Panel</legend>
                            <RadioButtonComponentExt name="panel" display="" options={dataMain[6]} selectchange={handlePanelChange} />
                        </fieldset>
                        </div>
                    {/* Outsider Frame Size */}
                        { showOutsideFrame && <div className="div-textbox-main">
                        <fieldset>  
                        <legend type="big">Outside Frame Size</legend>
                            <SelectComponentExt selectchange={handleOutsideFrameChange}  id="outSideFrameSide" name="outSideFrameSide" display="" options={dataMain[7]} {...register("outSideFrameSide", {
                                required: "Please select one item in the list"})} style={{width: 260 }} />
                            <div className="div-vertical-spacing"></div><div className="div-vertical-spacing-4"></div><div className="div-vertical-spacing-4"></div>
                        </fieldset>
                        </div> }
                    {/* Insider Frame Size */}
                    { showInsideFrame && <div className="div-textbox-main">
                        <fieldset>  
                        <legend type="big">Insider Frame Size</legend>
                            <SelectComponentExt style={{width: 260}} id="insideFrameSide" name="insideFrameSide" display="" options={dataMain[8]} selectchange={handleInsideFrameChange} {...register("insideFrameSide", {
                                required: "Please select one item in the list"})} />
                            <div className="div-vertical-spacing-4"></div><div className="div-vertical-spacing-4"></div>
                        </fieldset>
                        </div> }
                        <div className='div-spacing-between-rows' />
                        <br></br>
                    </div>  
                </div>
            </div>
            <div style={{display: 'inline-block'}}>
                <div className="form-control">
                    <div className="form-main-position">
                    {/* Color */}
                        <div className="div-textbox-main" >
                        <fieldset>  
                        <legend type="small" className="legend-margin-bottom">Color</legend>
                            <SelectComponentExt style={{width: 260}} name="color" display="" options={dataMain[9]} selectchange={handleColorChange} {...register("color", {
                                required: "Please select one item in the list"})} />
                            <div className="div-vertical-spacing-3"></div><div className="div-vertical-spacing-2"></div>
                        </fieldset>
                        </div>
                    {/* Rail Length */}
                        <div className="div-textbox-main">
                        <fieldset>  
                        <legend type="big">Rail Length</legend>
                            <RadioButtonComponentExt name="railLength" display="" options={dataMain[10]} selectchange={handleRailChange} />
                            <div className="div-vertical-spacing"></div>
                            <div className="div-vertical-spacing-6"></div>
                        </fieldset>
                        </div>
                    {/* Divider Spit Option */}
                        <div className="div-textbox-main">
                        <fieldset>  
                        <legend type="max">Divider/Split Option</legend>
                            <RadioButtonComponentExt name="dividerSplitOption" display="" options={dataMain[11]} selectchange={handleDividerSplitOptionChange} />
                            {/* <div className="div-vertical-spacing"></div> */}
                            <div className="div-vertical-spacing-9"></div>
                        </fieldset>
                        </div>
                    {/* Divider Spit Side */}
                        {showDividerSplit && <div className="" style={{display: 'inline-block', marginRight: 25}}>
                        <fieldset>  
                        <legend type="max">Divider/Split Size</legend>
                            <Form.Check type="radio" name="dividerSplitSize" value="50/50" label="50/50" {...register("dividerSplitSize", {
                                required: "Please select your option"})} onChange={handleDividerSplitSizeChange} /> 
                            <Form.Check type="radio" name="dividerSplitSize" value="30/70" label="30/70" {...register("dividerSplitSize", {
                                required: "Please select your option"})} onChange={handleDividerSplitSizeChange} />
                            <div className="div-vertical-spacing"></div>
                            <div className="div-vertical-spacing-10"></div>
                        </fieldset>
                        </div> }
                    {/* Choice */}
                        <div className="div-textbox-main">
                        <fieldset>  
                        <legend type="small" className="legend-margin-bottom">Choice</legend>
                            <RadioButtonComponentExt name="choice" display="" options={dataMain[13]} selectchange={handleChoiceChange} />
                            <div className="div-vertical-spacing-0"></div>
                            <div className="div-vertical-spacing-6"></div>
                        </fieldset>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: 'inline-block'}}>
                <div className="form-control" style={{'marginTop': 6}}>
                    <div className="form-main-position">
                    {/* Frame */}
                        <div className="div-textbox-main">
                        <fieldset>  
                        <legend type="small" className="legend-margin-bottom">Frame</legend>
                            <RadioButtonComponentExt name="frame" display="" options={dataMain[14]} selectchange={handleFrameChange}/>
                        </fieldset>
                        </div>
                    {/* Number of Frame */}
                    <div className="div-textbox-main">
                        <fieldset>  
                        <legend type="big" >Num of Frame</legend>
                            <RadioButtonComponentExt name="numOfFrame" display="" options={dataMain[15]} selectchange={handleNumOfFrameChange} />
                            <div className="div-vertical-spacing-7"></div>
                        </fieldset>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div>
                <div className="form-main-button-position">
                    <button type="submit" name="calculate" >Calculate</button>
                </div>
                <div className='form-main-button-position'>
                    <button type="submit" disabled={disable} >Save</button>
                </div>   
            </div>  
            </form>
            { showError && <div style={{marginLeft: 40}}><h4 style={{color: 'red'}}>Invoice already in database</h4></div> }
            { showHideTable && <TableDetailMain options={dataForTables} setdatafortable={setDataForTables} optionorders={dataOrders} setdatafororder={setDataForOrders} showHideTable={setShowHideTable} setButtonDisable={setDisable} ></TableDetailMain> }
            <br></br>
            <br></br>
        </div>
    );
};

export default MainComponent;