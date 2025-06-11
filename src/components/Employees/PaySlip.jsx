import { useState, useCallback } from "react";
import { Search, Plus, Edit, Trash2, Save, X, Upload, Eye, Calculator, ArrowLeft } from 'lucide-react';

const PaySlip = () => {
    const [employees] = useState([
        { id: 'EMP001', name: 'John Doe', phone: '9876543210', department: 'IT', designation: 'Software Engineer', bankAccount: '1234567890', upiId: 'john@paytm' },
        { id: 'EMP002', name: 'Jane Smith', phone: '9876543211', department: 'HR', designation: 'HR Manager', bankAccount: '1234567891', upiId: 'jane@gpay' },
        { id: 'EMP003', name: 'Mike Johnson', phone: '9876543212', department: 'Finance', designation: 'Accountant', bankAccount: '1234567892', upiId: 'mike@phonepe' },
        { id: 'EMP004', name: 'Sarah Wilson', phone: '9876543213', department: 'Marketing', designation: 'Marketing Executive', bankAccount: '1234567893', upiId: 'sarah@paytm' },
        { id: 'EMP005', name: 'David Brown', phone: '9876543214', department: 'IT', designation: 'Senior Developer', bankAccount: '1234567894', upiId: 'david@gpay' },
        { id: 'EMP006', name: 'David Brown', phone: '9876543214', department: 'IT', designation: 'Senior Developer', bankAccount: '1234567894', upiId: 'david@gpay' },
        { id: 'EMP007', name: 'David Brown', phone: '9876543214', department: 'IT', designation: 'Senior Developer', bankAccount: '1234567894', upiId: 'david@gpay' },
        { id: 'EMP008', name: 'David Brown', phone: '9876543214', department: 'IT', designation: 'Senior Developer', bankAccount: '1234567894', upiId: 'david@gpay' },
    ]);
    
    const [items, setItems] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentView, setCurrentView] = useState('employee-list');
    const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
    const [editingPayslip, setEditingPayslip] = useState(null);
    const [payslips, setPayslips] = useState([]);

    const [formData, setFormData] = useState({
        employeeId: '',
        employeeName: '',
        department: '',
        designation: '',
        payPeriod: '',
        paymentDate: '',
        basicSalary: '',
        hra: '',
        conveyanceAllowance: '',
        medicalAllowance: '',
        specialAllowance: '',
        bonus: '',
        overtimePay: '',
        otherEarnings: '',
        pf: '',
        esi: '',
        professionalTax: '',
        incomeTax: '',
        loanRecovery: '',
        otherDeductions: '',
        bankAccount: '',
        upiId: ''
    });

    // Helper function to safely convert to number
    const toNumber = (value) => {
        if (value === '') return 0;
        const num = parseFloat(value);
        return isNaN(num) ? 0 : num;
    };

    // Calculate totals
    const grossEarnings = 
        toNumber(formData.basicSalary) + 
        toNumber(formData.hra) + 
        toNumber(formData.conveyanceAllowance) + 
        toNumber(formData.medicalAllowance) + 
        toNumber(formData.specialAllowance) + 
        toNumber(formData.bonus) + 
        toNumber(formData.overtimePay) + 
        toNumber(formData.otherEarnings);

    const totalDeductions = 
        toNumber(formData.pf) + 
        toNumber(formData.esi) + 
        toNumber(formData.professionalTax) + 
        toNumber(formData.incomeTax) + 
        toNumber(formData.loanRecovery) + 
        toNumber(formData.otherDeductions);

    const netSalary = grossEarnings - totalDeductions;

    const handleInputChange = useCallback((field, value) => {
        const numericFields = ['basicSalary', 'hra', 'conveyanceAllowance', 'medicalAllowance', 'specialAllowance', 
                            'bonus', 'overtimePay', 'otherEarnings', 'pf', 'esi', 'professionalTax', 
                            'incomeTax', 'loanRecovery', 'otherDeductions'];
        
        if (numericFields.includes(field)) {
            // Allow empty string or numbers
            if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
                setFormData(prev => ({ ...prev, [field]: value }));
            }
        } else {
            setFormData(prev => ({ ...prev, [field]: value }));
        }
    }, []);

    const handlePayslip = (id) => {
        const employee = employees.find(emp => emp.id === id);
        if (employee) {
            setFormData({
                employeeId: employee.id,
                employeeName: employee.name,
                department: employee.department,
                designation: employee.designation,
                bankAccount: employee.bankAccount,
                upiId: employee.upiId,
                payPeriod: '',
                paymentDate: '',
                basicSalary: '',
                hra: '',
                conveyanceAllowance: '',
                medicalAllowance: '',
                specialAllowance: '',
                bonus: '',
                overtimePay: '',
                otherEarnings: '',
                pf: '',
                esi: '',
                professionalTax: '',
                incomeTax: '',
                loanRecovery: '',
                otherDeductions: ''
            });
            setSelectedEmployeeId(id);
            setCurrentView('create-payslip');
        }
    };

    const resetForm = () => {
        setFormData({
            employeeId: '', employeeName: '', department: '', designation: '', 
            payPeriod: '', paymentDate: '',
            basicSalary: '', hra: '', conveyanceAllowance: '', medicalAllowance: '', 
            specialAllowance: '', bonus: '', overtimePay: '', otherEarnings: '', 
            pf: '', esi: '', professionalTax: '', incomeTax: '', loanRecovery: '', 
            otherDeductions: '', bankAccount: '', upiId: ''
        });
        setEditingPayslip(null);
        setSelectedEmployeeId('');
    };

    const handleSubmit = () => {
        if (!formData.employeeId || !formData.payPeriod || !formData.paymentDate) {
            alert('Please fill in all required fields');
            return;
        }

        // Convert empty strings to 0 for numeric fields
        const numericFields = ['basicSalary', 'hra', 'conveyanceAllowance', 'medicalAllowance', 
                             'specialAllowance', 'bonus', 'overtimePay', 'otherEarnings',
                             'pf', 'esi', 'professionalTax', 'incomeTax', 'loanRecovery', 'otherDeductions'];
        
        const processedData = { ...formData };
        numericFields.forEach(field => {
            processedData[field] = processedData[field] === '' ? 0 : parseFloat(processedData[field]);
        });

        const payslipData = {
            ...processedData,
            id: editingPayslip ? editingPayslip.id : Date.now(),
            grossEarnings,
            totalDeductions,
            netSalary
        };

        if (editingPayslip) {
            setPayslips(prev => prev.map(p => p.id === editingPayslip.id ? payslipData : p));
        } else {
            setPayslips(prev => [...prev, payslipData]);
        }

        resetForm();
        setCurrentView('payslip-list');
    };

    const handleEdit = (payslip) => {
        // Convert numbers back to strings for editing
        const numericFields = ['basicSalary', 'hra', 'conveyanceAllowance', 'medicalAllowance', 
                             'specialAllowance', 'bonus', 'overtimePay', 'otherEarnings',
                             'pf', 'esi', 'professionalTax', 'incomeTax', 'loanRecovery', 'otherDeductions'];
        
        const stringData = { ...payslip };
        numericFields.forEach(field => {
            stringData[field] = payslip[field] === 0 ? '' : payslip[field].toString();
        });

        setFormData(stringData);
        setEditingPayslip(payslip);
        setCurrentView('create-payslip');
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this payslip?')) {
            setPayslips(prev => prev.filter(p => p.id !== id));
        }
    };

    const NumberInput = useCallback(({ label, value, onChange, required = false }) => {
        return (
            <div className="mb-4">
                <label className="block text-[11px] font-medium text-gray-500">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
                <input
                    type="text"
                    inputMode="decimal"
                    value={value}
                    onChange={(e) => {
                        const rawValue = e.target.value;
                        if (rawValue === '' || /^[0-9]*\.?[0-9]*$/.test(rawValue)) {
                            onChange(rawValue);
                        }
                    }}
                    className="w-full border border-gray-300 bg-white rounded-sm input input-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ padding: '5px' }}
                />
            </div>
        );
    }, []);

    return (
        <>
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 3px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgb(218, 216, 216);
                    border-radius: 3px;
                    border: 1px solid rgb(206, 198, 198);
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgb(202, 190, 190);
                }
                
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgb(226, 215, 215) #f1f1f1;
                }
            `}</style>

            <div className="bg-white w-full
                max-w-[99vw] 
                xl:max-w-[90vw] 
                2xl:max-w-[95vw] 
                h-auto max-h-[70vh] 
                rounded-xl px-4 md:px-8 lg:px-12
                mx-auto overflow-auto custom-scrollbar text-gray-500"
                style={{ fontFamily: 'Open Sans', overflow: 'auto' }}
            >
                {currentView === 'employee-list' && (
                    <>
                        <div
                            className="flex flex-row bg-white justify-between"
                            style={{
                                position: 'sticky',
                                top: 0,
                                backgroundColor: 'white',
                                zIndex: 20,
                                padding: '10px',
                                paddingTop: '30px'
                            }}
                        >
                            <div className="flex flex-col gap-2">
                                <p className="text-[12px]">Items Per Page</p>
                                <select
                                    className="border border-gray-300 rounded-sm text-sm"
                                    value={items}
                                    onChange={(e) => setItems(Number(e.target.value))}
                                >
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                </select>
                            </div>

                            <input
                                type="text"
                                placeholder="Search employee..."
                                className="border border-gray-300 rounded-sm text-sm w-[300px] focus:border-blue-300"
                                style={{ padding: '10px' }}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <table className="table w-full text-sm text-left text-gray-500 border-collapse min-w-[1220px]" style={{ borderSpacing: '0 12px', borderCollapse: 'separate' }}>
                            <thead>
                                <tr className="sticky text-gray-400">
                                    <th className="sticky" style={{ width: '90px', paddingLeft: '20px' }}>SL NO</th>
                                    <th style={{ width: '100px' }}>NAME</th>
                                    <th style={{ width: '100px' }}>EMPLOYEE ID</th>
                                    <th style={{ width: '90px' }}>DEPARTMENT</th>
                                    <th style={{ width: '90px' }}>DESIGNATION</th>
                                    <th style={{ width: '90px' }}>PHONE NUMBER</th>
                                    <th style={{ width: '100px' }}>PAYSLIP</th>
                                    <th style={{ width: '90px' }}>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees
                                    .filter((emp) =>
                                        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        emp.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        emp.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        emp.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        emp.phone.includes(searchTerm)
                                    )
                                    .map((emp, index) => (
                                        <tr key={emp.id} className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                                            <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '20px' }}>{index + 1}</td>
                                            <td className="px-6 py-5 border-b border-gray-200 text-xs">{emp.name}</td>
                                            <td className="px-6 py-5 border-b border-gray-200 text-xs">{emp.id}</td>
                                            <td className="px-6 py-5 border-b border-gray-200 text-xs">{emp.department}</td>
                                            <td className="px-6 py-5 border-b border-gray-200 text-xs">{emp.designation}</td>
                                            <td className="px-6 py-5 border-b border-gray-200 text-xs">{emp.phone}</td>
                                            <td className="px-6 py-5 border-b border-gray-200 text-xs ">
                                                <button className="w-[100px] h-[25px] text-white rounded-sm bg-[#646FE4]" onClick={() => handlePayslip(emp.id)}>Create Payslip</button>
                                            </td>
                                            <td className="flex flex-row border-gray-200 text-xs gap-2">
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </>
                )}

                {currentView === 'create-payslip' && (
                    <div className="flex-col gap-8" style={{ padding: '10px', marginBottom: '5px' }}>
                        <div className="flex items-center gap-8 ">
                            <button
                                onClick={() => setCurrentView('employee-list')}
                                className="flex items-center gap-2 text-[12px] text-gray-500 rounded-md hover:bg-gray-300"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Employee List
                            </button>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border text-gray-500 text-[12px] border-gray-100" style={{ padding: '20px', marginBottom: '10px' }}>
                            <h2 className="text-xl font-semibold text-gray-500" style={{ marginBottom: '5px' }}>Employee Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-500">Employee Name</label>
                                    <input type="text" value={formData.employeeName} readOnly className="w-full input input-xs border border-gray-300 rounded-sm bg-gray-50" style={{ padding: '5px' }} />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-500">Department</label>
                                    <input type="text" value={formData.department} readOnly className="w-full border border-gray-300 input input-xs rounded-sm bg-gray-50" style={{ padding: '5px' }} />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-500 mb-1">Designation</label>
                                    <input type="text" value={formData.designation} readOnly className="w-full input input-xs rounded-sm border border-gray-300 rounded-sm bg-gray-50" style={{ padding: '5px' }} />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-500 mb-1">Pay Period <span className="text-red-500">*</span></label>
                                    <input type="month" value={formData.payPeriod} onChange={(e) => handleInputChange('payPeriod', e.target.value)} className="w-full bg-white input input-xs border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required style={{ padding: '5px' }} />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-500 mb-1">Payment Date <span className="text-red-500">*</span></label>
                                    <input type="date" value={formData.paymentDate} onChange={(e) => handleInputChange('paymentDate', e.target.value)} className="w-full bg-white input input-xs border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm text-gray-500 border border-gray-100" style={{ padding: '20px', marginBottom: '10px' }}>
                            <h2 className="text-xl font-semibold text-gray-500" style={{ marginBottom: '5px' }}>Earnings</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <NumberInput label="Basic Salary" value={formData.basicSalary} onChange={(value) => handleInputChange('basicSalary', value)} required />
                                <NumberInput label="House Rent Allowance (HRA)" value={formData.hra} onChange={(value) => handleInputChange('hra', value)} />
                                <NumberInput label="Conveyance Allowance" value={formData.conveyanceAllowance} onChange={(value) => handleInputChange('conveyanceAllowance', value)} />
                                <NumberInput label="Medical Allowance" value={formData.medicalAllowance} onChange={(value) => handleInputChange('medicalAllowance', value)} />
                                <NumberInput label="Special Allowance" value={formData.specialAllowance} onChange={(value) => handleInputChange('specialAllowance', value)} />
                                <NumberInput label="Bonus" value={formData.bonus} onChange={(value) => handleInputChange('bonus', value)} />
                                <NumberInput label="Overtime Pay" value={formData.overtimePay} onChange={(value) => handleInputChange('overtimePay', value)} />
                                <NumberInput label="Other Earnings" value={formData.otherEarnings} onChange={(value) => handleInputChange('otherEarnings', value)} />
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm text-gray-500 border border-gray-100" style={{ padding: '20px', marginBottom: '10px' }}>
                            <h2 className="text-xl font-semibold mb-4 text-gray-500">Deductions</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <NumberInput label="Provident Fund (PF)" value={formData.pf} onChange={(value) => handleInputChange('pf', value)} />
                                <NumberInput label="Employee State Insurance (ESI)" value={formData.esi} onChange={(value) => handleInputChange('esi', value)} />
                                <NumberInput label="Professional Tax (PT)" value={formData.professionalTax} onChange={(value) => handleInputChange('professionalTax', value)} />
                                <NumberInput label="Income Tax (TDS)" value={formData.incomeTax} onChange={(value) => handleInputChange('incomeTax', value)} />
                                <NumberInput label="Loan Recovery" value={formData.loanRecovery} onChange={(value) => handleInputChange('loanRecovery', value)} />
                                <NumberInput label="Other Deductions" value={formData.otherDeductions} onChange={(value) => handleInputChange('otherDeductions', value)} />
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border border-gray-100" style={{ padding: '20px', marginBottom: '10px' }}>
                            <h2 className="text-xl font-semibold mb-4 text-gray-500">
                                <Calculator className="w-5 h-5 inline mr-2" />
                                Summary
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="text-sm text-gray-500 font-medium">Gross Earnings</div>
                                    <div className="text-2xl font-bold text-gray-700">₹{grossEarnings.toLocaleString()}</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="text-sm text-gray-500 font-medium">Total Deductions</div>
                                    <div className="text-2xl font-bold text-gray-500">₹{totalDeductions.toLocaleString()}</div>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="text-sm text-gray-500 font-medium">Net Salary</div>
                                    <div className="text-2xl font-bold text-gray-500">₹{netSalary.toLocaleString()}</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <div className="text-sm text-gray-600 font-medium">Payment Mode</div>
                                    <div className="text-sm text-gray-700">
                                        <div>Bank: {formData.bankAccount}</div>
                                        <div>UPI: {formData.upiId}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border-1 shadow-lg border-dashed border-gray-300  rounded-lg" style={{ padding: '10px' }}>
                            <div className="p-6 text-center">
                                {/* <Upload className="w-8  h-8  text-gray-400" /> */}
                                <p className="text-gray-500 text-sm">Upload supporting documents (PDF/Images)</p>
                                <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="hidden" />
                                <button type="button" className="mt-2  bg-gray-200 text-sm text-gray-700 rounded-md hover:bg-gray-300">
                                    Choose Files
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4" style={{ margin: '30px' }}>
                            <button
                                type="button"
                                onClick={() => { resetForm(); setCurrentView('employee-list'); }}
                                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                            >
                                <X className="w-4 h-4 inline mr-2" />
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                style={{ padding: '10px' }}
                            >
                                <Save className="w-4 h-4 inline mr-2" />
                                {editingPayslip ? 'Update Payslip' : 'Create Payslip'}
                            </button>
                        </div>
                    </div>
                )}

                {currentView === 'payslip-list' && (
                    <div className="bg-white rounded-lg shadow-sm h-[80vh]" style={{ padding: '20px' }}>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-4">Payslip Records</h2>
                            <div className="overflow-x-auto">
                                <table className="table w-full text-sm text-left text-gray-500 border-collapse min-w-[1000px]" style={{ borderSpacing: '0 12px', borderCollapse: 'separate' }}>
                                    <thead>
                                        <tr className="sticky text-gray-500">
                                            <th className="border-b" style={{ width: '100px' }}>Employee</th>
                                            <th className="border-b" style={{ width: '100px' }}>Department</th>
                                            <th className="border-b" style={{ width: '90px' }}>Pay Period</th>
                                            <th className="border-b" style={{ width: '90px' }}>Gross Earnings</th>
                                            <th className="border-b" style={{ width: '90px' }}>Total Deductions</th>
                                            <th className="border-b" style={{ width: '100px' }}>Net Salary</th>
                                            <th className="border-b" style={{ width: '90px' }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {payslips.map(payslip => (
                                            <tr key={payslip.id} className="bg-white hover:bg-gray-50 h-[44px] text-gray-600">
                                                <td className="px-6 py-5 border-b border-gray-200 text-xs">
                                                    <div>
                                                        <div className="font-medium">{payslip.employeeName}</div>
                                                        <div className="text-sm text-gray-500">{payslip.employeeId}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5 border-b border-gray-200 text-xs">{payslip.department}</td>
                                                <td className="px-6 py-5 border-b border-gray-200 text-xs">{payslip.payPeriod}</td>
                                                <td className="px-6 py-5 border-b border-gray-200 text-xs">₹{(payslip.basicSalary + payslip.hra + payslip.conveyanceAllowance + payslip.medicalAllowance + payslip.specialAllowance + payslip.bonus + payslip.overtimePay + payslip.otherEarnings).toLocaleString()}</td>
                                                <td className="px-6 py-5 border-b border-gray-200 text-xs">₹{(payslip.pf + payslip.esi + payslip.professionalTax + payslip.incomeTax + payslip.loanRecovery + payslip.otherDeductions).toLocaleString()}</td>
                                                <td className="px-6 py-5 border-b border-gray-200 text-xs">₹{((payslip.basicSalary + payslip.hra + payslip.conveyanceAllowance + payslip.medicalAllowance + payslip.specialAllowance + payslip.bonus + payslip.overtimePay + payslip.otherEarnings) - (payslip.pf + payslip.esi + payslip.professionalTax + payslip.incomeTax + payslip.loanRecovery + payslip.otherDeductions)).toLocaleString()}</td>
                                                <td className="px-6 py-5 border-b border-gray-200 text-xs">
                                                    <button onClick={() => handleEdit(payslip)} className="text-blue-600 hover:text-blue-800 mr-2">
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                    <button onClick={() => handleDelete(payslip.id)} className="text-red-600 hover:text-red-800">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {currentView === "employee-list" && (
                    <div className="flex gap-1 justify-center">
                        <button className="btn rounded-full border-gray-100 bg-white w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
                            {'<'}
                        </button>
                        <button className="btn rounded-full border-none w-[40px] h-[40px] flex items-center justify-center font-semibold bg-blue-500 text-white">
                            1
                        </button>
                        <button className="btn rounded-full border-gray-100 bg-white w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
                            {'>'}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default PaySlip;