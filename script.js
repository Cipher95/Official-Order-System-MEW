const siteContent = {
        leaveTypes: [
            { id: 'annual', title: 'إجازة دورية', description: 'الإجازة السنوية المستحقة للموظف حسب لوائح الوزارة.' },
            { id: 'emergency_leave', title: 'إجازة طارئة', description: 'للظروف الطارئة والغير متوقعة التي تستدعي غياب الموظف.' },
        ],
        assignmentTypes: [
            { id: 'assignment', title: 'تكليف', description: 'للقيام بمهام عمل رسمية خارج موقع العمل الأساسي أو ضمنه.' },
        ],
        permitTypes: [
            { id: 'exit_permit', title: 'إذن خروج', description: 'للسماح بالخروج أثناء ساعات العمل الرسمية لظرف طارئ.' },
            { id: 'entry_permit_pre', title: 'إذن دخول (مسبق)', description: 'للسماح بالدخول إلى مباني الوزارة خارج ساعات العمل الرسمية.' },
        ],
        otherRequestTypes: [
             { id: 'materials_entry', title: 'تصريح دخول مواد', description: 'لإدخال مواد أو معدات إلى مباني الوزارة.', detailsLabel: 'وصف المواد:' },
             { id: 'materials_exit', title: 'تصريح خروج مواد', description: 'لإخراج مواد أو معدات من مباني الوزارة.', detailsLabel: 'وصف المواد:' },
             { id: 'individuals_entry', title: 'تصريح دخول أفراد', description: 'للسماح بدخول زوار أو مقاولين غير موظفين.', detailsLabel: 'أسماء الأفراد وأرقامهم المدنية:' },
             { id: 'pc_scrap_inspection', title: 'فحص الحاسب الألي وملحقاتها لسكربتها', description: 'طلب فحص أجهزة الحاسب الآلي وملحقاتها تمهيداً لإزالتها من العهدة.', detailsLabel: 'بيان بالأجهزة والمعدات المطلوب فحصها:' },
             { id: 'fingerprint_update', title: 'تحديث البصمة', description: 'طلب تحديث بيانات بصمة الحضور والانصراف.', detailsLabel: 'سبب التحديث (اختياري):' },
             { id: 'fingerprint_transfer', title: 'تحويل البصمة', description: 'طلب تحويل الموظف من جهاز بصمة إلى آخر.', detailsLabel: 'الموقع الحالي والموقع الجديد المطلوب التحويل إليه:' },
             { id: 'supplies_request', title: 'تزويد أحبار الطابعة ومستلزمات حاسب ألي', description: 'طلب مواد استهلاكية مثل أحبار الطابعات أو ملحقات الحاسب الآلي.', detailsLabel: 'قائمة بالمواد والمستلزمات المطلوبة:' },
             { id: 'office365_migration', title: 'تحويل البريد الالكتروني الى Office 365', description: 'طلب ترحيل حساب البريد الإلكتروني الحالي إلى منصة Office 365.', detailsLabel: 'البريد الإلكتروني الحالي (اختياري):' },
             { id: 'hardware_request', title: 'أجهزة حاسب ألي وملحقاتها', description: 'طلب توفير أجهزة حاسب آلي جديدة أو ملحقاتها.', detailsLabel: 'قائمة بالأجهزة والملحقات المطلوبة ومواصفاتها:' },
             { id: 'network_point_request', title: 'نقاط شبكة الربط المحلية لخدمات الوزارة الإلكترونية', description: 'طلب تركيب أو تفعيل نقاط شبكة جديدة في المكاتب.', detailsLabel: 'تحديد الموقع المطلوب ورقم النقطة (إن وجد):' },
             { id: 'portal_feature_request', title: 'إضافة/تعديل/إلغاء خاصية في نظام البوابة الإلكترونية', description: 'طلب يتعلق بتطوير أو تعديل الخصائص الموجودة في البوابة الإلكترونية للوزارة.', detailsLabel: 'شرح تفصيلي للطلب:' },
             { id: 'portal_user_request', title: 'إنشاء/تحديث/إلغاء مستخدم في نظام بوابة الخدمات الإلكترونية', description: 'طلب إدارة حسابات المستخدمين في نظام بوابة الخدمات الإلكترونية.', detailsLabel: 'بيانات المستخدم والإجراء المطلوب:' }
        ],
        notificationTypes: [
            { id: 'return_notice', title: 'إشعار عودة من إجازة', description: 'لإبلاغ الإدارة رسمياً بتاريخ استئناف العمل بعد انتهاء الإجازة.', fields: [{id: 'date', label: 'تاريخ العودة للعمل:', type: 'date'}] },
            { id: 'leave_interruption', title: 'قطع إجازة', description: 'لإبلاغ الإدارة بقطع الإجازة الحالية والعودة للعمل قبل الموعد المحدد.', fields: [{id: 'date', label: 'تاريخ قطع الإجازة والعودة للعمل:', type: 'date'}] },
            { id: 'extend_leave', title: 'تمديد إجازة', description: 'لطلب تمديد إجازة حالية أو معتمدة إلى تاريخ جديد.', fields: [{id: 'date', label: 'تاريخ النهاية الجديد:', type: 'date'}]},
            { id: 'modify_leave', title: 'تعديل إجازة', description: 'لتعديل تواريخ إجازة معتمدة مسبقاً.', fields: [
                {id: 'start_date', label: 'تاريخ البداية الجديد:', type: 'date', class: 'half-width'},
                {id: 'end_date', label: 'تاريخ النهاية الجديد:', type: 'date', class: 'half-width'}
            ]}
        ],
        alerts: {
            fillFields: 'الرجاء تعبئة جميع الحقول المطلوبة.',
            invalidDates: 'تاريخ النهاية يجب أن يكون بعد تاريخ البداية.',
            noRequests: 'لا توجد طلبات لإصدار النموذج. الرجاء إضافة طلب أولاً.',
            generatingPDF: 'جاري إنشاء النموذج...',
            requestExists: 'لديك طلب قائم من هذا النوع. يرجى حذفه أولاً لإضافة طلب جديد.'
        }
    };

    const getEl = (id) => document.getElementById(id);
    let employeeInfo = { name: '', employeeId: '', civilId: '', management: '' };
    let requests = []; 

    function updateClockAndDate() {
        const now = new Date();
        const locale = 'ar-KW';
        getEl('clock').textContent = now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false });
        getEl('date').textContent = now.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }

    function renderRequestForms() {
        // --- Tab 1: Leaves & Assignments ---
        let leavesHTML = '';
        siteContent.leaveTypes.forEach(type => {
            leavesHTML += `<div class="request-card"><h3>${type.title}</h3><p>${type.description}</p><div class="request-controls"><div class="half-width"><label for="start-date-${type.id}">تاريخ البداية:</label><input type="date" id="start-date-${type.id}"></div><div class="half-width"><label for="end-date-${type.id}">تاريخ النهاية:</label><input type="date" id="end-date-${type.id}"></div></div><button class="add-request-btn" data-type="leave" data-id="${type.id}">إضافة طلب</button></div>`;
        });
        siteContent.assignmentTypes.forEach(type => {
            leavesHTML += `<div class="request-card"><h3>${type.title}</h3><p>${type.description}</p><div class="request-controls"><div class="half-width"><label for="start-date-${type.id}">تاريخ البداية:</label><input type="date" id="start-date-${type.id}"></div><div class="half-width"><label for="end-date-${type.id}">تاريخ النهاية:</label><input type="date" id="end-date-${type.id}"></div><div><label for="details-${type.id}">بيان التكليف:</label><textarea id="details-${type.id}"></textarea></div></div><button class="add-request-btn" data-type="assignment" data-id="${type.id}">إضافة تكليف</button></div>`;
        });
        getEl('leaves-assignments-section').innerHTML = leavesHTML;

        // --- Tab 2: Permits ---
        let permitsHTML = '';
        siteContent.permitTypes.forEach(type => {
            permitsHTML += `<div class="request-card"><h3>${type.title}</h3><p>${type.description}</p><div class="request-controls" style="grid-template-columns: 1fr 1fr;"><div class="half-width"><label for="permit-date-${type.id}">التاريخ:</label><input type="date" id="permit-date-${type.id}"></div><div class="half-width"><label for="from-time-${type.id}">من الساعة:</label><input type="time" id="from-time-${type.id}"></div></div><button class="add-request-btn" data-type="permit" data-id="${type.id}">إضافة إذن</button></div>`;
        });
        getEl('permits-section').innerHTML = permitsHTML;

        // --- Tab 3: Other Requests ---
        let otherRequestsHTML = '';
        siteContent.otherRequestTypes.forEach(type => {
            otherRequestsHTML += `<div class="request-card"><h3>${type.title}</h3><p>${type.description}</p><div class="request-controls"><div style="grid-column: span 2;"><label for="permit-date-${type.id}">التاريخ:</label><input type="date" id="permit-date-${type.id}"></div><div><label for="details-${type.id}">${type.detailsLabel}</label><textarea id="details-${type.id}"></textarea></div></div><button class="add-request-btn" data-type="other_request" data-id="${type.id}">إضافة تصريح</button></div>`;
        });
        getEl('other-requests-section').innerHTML = otherRequestsHTML;
        
        // --- Tab 4: Notifications (Refactored) ---
        let notificationsHTML = '';
        siteContent.notificationTypes.forEach(type => {
            let controlsHTML = '';
            type.fields.forEach(field => {
                controlsHTML += `<div class="${field.class || ''}"><label for="${field.id}-${type.id}">${field.label}</label><input type="${field.type}" id="${field.id}-${type.id}"></div>`;
            });
            const gridStyle = type.fields.length > 1 ? 'style="grid-template-columns: 1fr 1fr;"' : 'style="grid-template-columns: 1fr;"';
            
            notificationsHTML += `
                <div class="request-card">
                    <h3>${type.title}</h3>
                    <p>${type.description}</p>
                    <div class="request-controls" ${gridStyle}>
                        ${controlsHTML}
                    </div>
                    <button class="add-request-btn" data-type="notification" data-id="${type.id}">إضافة إشعار</button>
                </div>`;
        });
        getEl('notifications-section').innerHTML = notificationsHTML;
    }

    function renderSummary() {
        const summaryItemsEl = getEl('summary-items');
        summaryItemsEl.innerHTML = '';
        if (requests.length === 0) { summaryItemsEl.innerHTML = '<p>لا توجد طلبات حالياً.</p>'; return; }
        
        requests.forEach((req, index) => {
            let detailsHtml = '';
            if (req.type === 'leave') {
                detailsHtml = `<p>من: ${req.startDate} <br> إلى: ${req.endDate}</p><p><strong>المدة: ${req.days} أيام</strong></p>`;
            } else if (req.type === 'assignment') {
                detailsHtml = `<p>من: ${req.startDate} <br> إلى: ${req.endDate} (المدة: ${req.days} أيام)</p><p style="font-weight: bold;">بيان التكليف:</p><p>${req.details}</p>`;
            } else if (req.type === 'permit') {
                detailsHtml = `<p>التاريخ: ${req.date}</p><p><strong>الوقت: من ${req.fromTime}</strong></p>`;
            } else if (req.type === 'other_request') {
                detailsHtml = `<p>التاريخ: ${req.date}</p><p style="font-weight: bold;">التفاصيل:</p><p>${req.details}</p>`;
            } else if (req.type === 'notification') {
                switch (req.id) {
                    case 'return_notice':
                        detailsHtml = `<p><strong>تاريخ العودة للعمل: ${req.date}</strong></p>`;
                        break;
                    case 'leave_interruption':
                        detailsHtml = `<p><strong>تاريخ قطع الإجازة: ${req.date}</strong></p>`;
                        break;
                    case 'extend_leave':
                        detailsHtml = `<p><strong>تاريخ النهاية الجديد: ${req.date}</strong></p>`;
                        break;
                    case 'modify_leave':
                        detailsHtml = `<p>من: ${req.start_date} <br> إلى: ${req.end_date}</p>`;
                        break;
                }
            }

            summaryItemsEl.innerHTML += `<div class="summary-item"><div class="summary-item-info"><h4>${req.title}</h4>${detailsHtml}</div><button class="delete-item-btn" data-index="${index}">X</button></div>`;
        });
    }

    async function generatePDF() {
        const submitRequestBtn = getEl('submit-request-btn');
        if (requests.length === 0) { alert(siteContent.alerts.noRequests); return; }
        
        submitRequestBtn.textContent = siteContent.alerts.generatingPDF;
        submitRequestBtn.disabled = true;

        let itemsHtml = '';
        requests.forEach(req => {
            let details = '';
            if (req.type === 'leave') { details = `من: ${req.startDate} إلى: ${req.endDate} (المدة: ${req.days} أيام)`; } 
            else if (req.type === 'assignment') { details = `من: ${req.startDate} إلى: ${req.endDate} (المدة: ${req.days} أيام)<br><strong>بيان التكليف:</strong> ${req.details.replace(/\n/g, '<br>')}`; }
            else if (req.type === 'permit') { details = `بتاريخ: ${req.date} من الساعة ${req.fromTime}`; }
            else if (req.type === 'other_request') { details = `بتاريخ: ${req.date}<br><strong>التفاصيل:</strong> ${req.details.replace(/\n/g, '<br>')}`; }
            else if (req.type === 'notification') {
                 switch (req.id) {
                    case 'return_notice':
                        details = `تاريخ استئناف العمل: ${req.date}`;
                        break;
                    case 'leave_interruption':
                        details = `تاريخ قطع الإجازة والعودة للعمل: ${req.date}`;
                        break;
                    case 'extend_leave':
                        details = `تمديد الإجازة حتى تاريخ: ${req.date}`;
                        break;
                    case 'modify_leave':
                        details = `التواريخ الجديدة: من ${req.start_date} إلى ${req.end_date}`;
                        break;
                }
            }
            itemsHtml += `<tr><td style="padding: 10px; border: 1px solid #ccc; vertical-align: top;">${req.title}</td><td style="padding: 10px; border: 1px solid #ccc;">${details}</td></tr>`;
        });
        
        const logoUrl = 'mew_ar.png';
        const invoiceContentEl = getEl('invoice-content');
        invoiceContentEl.innerHTML = `
            <div style="font-family: 'Cairo', sans-serif; padding: 40px; color: #333; direction: rtl; width: 800px; border: 1px solid #333;">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--primary-color); padding-bottom: 10px; margin-bottom: 20px;">
                    <img src="${logoUrl}" style="width: 80px; height: 80px;" crossorigin="anonymous" />
                    <div style="text-align: center;"><h2 style="color: var(--primary-color); margin: 0;">نموذج طلب رسمي</h2><h3 style="margin: 0;">وزارة الكهرباء والماء والطاقة المتجددة</h3></div><div></div></div>
                <table style="width: 100%; margin-bottom: 30px; border: 0;">
                    <tr><td style="font-weight: bold; padding: 5px;">اسم الموظف:</td><td style="padding: 5px;">${employeeInfo.name}</td></tr>
                    <tr><td style="font-weight: bold; padding: 5px;">الرقم الوظيفي:</td><td style="padding: 5px;">${employeeInfo.employeeId}</td></tr>
                    <tr><td style="font-weight: bold; padding: 5px;">الرقم المدني:</td><td style="padding: 5px;">${employeeInfo.civilId}</td></tr>
                    <tr><td style="font-weight: bold; padding: 5px;">الإدارة:</td><td style="padding: 5px;">${employeeInfo.management}</td></tr>
                    <tr><td style="font-weight: bold; padding: 5px;">تاريخ الطلب:</td><td style="padding: 5px;">${new Date().toLocaleDateString('ar-KW')}</td></tr>
                </table>
                <h3 style="margin-bottom: 10px;">تفاصيل الطلبات:</h3>
                <table style="width: 100%; border-collapse: collapse; text-align: right; margin-bottom: 50px;">
                    <thead><tr style="background-color: #f2f2f2;"><th style="padding: 12px; border: 1px solid #ccc; width: 30%;">نوع الطلب</th><th style="padding: 12px; border: 1px solid #ccc;">التفاصيل</th></tr></thead>
                    <tbody>${itemsHtml}</tbody></table>
                <table style="width: 100%; margin-top: 60px; text-align: center;">
                    <tr><td style="padding: 10px;">..............................</td><td style="padding: 10px;">..............................</td></tr>
                    <tr><td style="padding: 10px; font-weight: bold;">توقيع الموظف</td><td style="padding: 10px; font-weight: bold;">توقيع المدير المباشر</td></tr>
                </table></div>`;
        
        invoiceContentEl.style.display = 'block';
        try {
            const { jsPDF } = window.jspdf;
            const canvas = await html2canvas(invoiceContentEl, { scale: 2, useCORS: true });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
            pdf.addImage(imgData, 'PNG', 20, 20, pdf.internal.pageSize.getWidth() - 40, 0);
            pdf.save(`MEW-Request-${employeeInfo.civilId}.pdf`);
        } catch(error) { console.error("PDF generation error:", error); alert("حدث خطأ أثناء إنشاء الملف. قد تكون صورة الشعار محظورة."); }
        finally {
            invoiceContentEl.style.display = 'none';
            submitRequestBtn.textContent = 'إصدار طلب رسمي';
            submitRequestBtn.disabled = false;
        }
    }

    function handleAddRequest(e) {
        if (!e.target.classList.contains('add-request-btn')) return;
        const requestType = e.target.dataset.type;
        const typeId = e.target.dataset.id;
        
        if (requests.some(req => req.id === typeId)) { alert(siteContent.alerts.requestExists); return; }

        if (requestType === 'leave') {
            const type = siteContent.leaveTypes.find(t => t.id === typeId);
            const start = getEl(`start-date-${typeId}`).value, end = getEl(`end-date-${typeId}`).value;
            if (!start || !end) { alert(siteContent.alerts.fillFields); return; }
            if (new Date(end) < new Date(start)) { alert(siteContent.alerts.invalidDates); return; }
            const diffDays = Math.ceil(Math.abs(new Date(end) - new Date(start)) / (1e3*60*60*24)) + 1;
            requests.push({ type: 'leave', id: typeId, title: type.title, startDate: start, endDate: end, days: diffDays });
        } else if (requestType === 'assignment') {
            const type = siteContent.assignmentTypes.find(t => t.id === typeId);
            const start = getEl(`start-date-${typeId}`).value, end = getEl(`end-date-${typeId}`).value;
            const details = getEl(`details-${typeId}`).value.trim();
            if (!start || !end || !details) { alert(siteContent.alerts.fillFields); return; }
            if (new Date(end) < new Date(start)) { alert(siteContent.alerts.invalidDates); return; }
            const diffDays = Math.ceil(Math.abs(new Date(end) - new Date(start)) / (1e3*60*60*24)) + 1;
            requests.push({ type: 'assignment', id: typeId, title: type.title, startDate: start, endDate: end, days: diffDays, details: details });
        } else if (requestType === 'permit') {
            const type = siteContent.permitTypes.find(t => t.id === typeId);
            const date = getEl(`permit-date-${typeId}`).value, fromTime = getEl(`from-time-${typeId}`).value;
            if (!date || !fromTime) { alert(siteContent.alerts.fillFields); return; }
            requests.push({ type: 'permit', id: typeId, title: type.title, date: date, fromTime: fromTime });
        } else if (requestType === 'other_request') {
            const type = siteContent.otherRequestTypes.find(t => t.id === typeId);
            const date = getEl(`permit-date-${typeId}`).value, details = getEl(`details-${typeId}`).value.trim();
            if (!date || !details) { alert(siteContent.alerts.fillFields); return; }
            requests.push({ type: 'other_request', id: typeId, title: type.title, date: date, details: details });
        } else if (requestType === 'notification') {
            const type = siteContent.notificationTypes.find(t => t.id === typeId);
            let requestData = { type: 'notification', id: typeId, title: type.title };
            let allFieldsValid = true;

            type.fields.forEach(field => {
                const inputEl = getEl(`${field.id}-${typeId}`);
                if (!inputEl.value) { allFieldsValid = false; }
                requestData[field.id] = inputEl.value;
            });

            if (!allFieldsValid) { alert(siteContent.alerts.fillFields); return; }
            if (type.id === 'modify_leave' && new Date(requestData.end_date) < new Date(requestData.start_date)) {
                alert(siteContent.alerts.invalidDates);
                return;
            }
            requests.push(requestData);
        }
        
        renderSummary();
    }

    function handleSummaryClick(e) {
        if (e.target.classList.contains('delete-item-btn')) {
            requests.splice(e.target.dataset.index, 1);
            renderSummary();
        }
    }
    
    function handleNameSubmit() {
        const fullName = getEl('full-name-input').value.trim();
        const employeeId = getEl('employee-id-input').value.trim();
        const civilId = getEl('civil-id-input').value.trim();
        const management = getEl('management-name-input').value.trim();

        if (!fullName || !employeeId || !civilId || !management) { alert(siteContent.alerts.fillFields); return; }
        
        employeeInfo = { name: fullName, employeeId: employeeId, civilId: civilId, management: management };
        getEl('welcome-message').innerHTML = `<strong>الموظف:</strong> ${fullName} | <strong>الرقم الوظيفي:</strong> ${employeeId} | <strong>الرقم المدني:</strong> ${civilId} | <strong>الإدارة:</strong> ${management}`;
        getEl('name-prompt-overlay').style.display = 'none';
        getEl('main-container').style.display = 'block';

        renderRequestForms();
        renderSummary();
        updateClockAndDate();
        setInterval(updateClockAndDate, 1000);
    }
    
    function handleTabSwitching(e) {
        e.preventDefault();
        if (!e.target.classList.contains('nav-link')) return;

        const targetId = e.target.dataset.target;
        
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');

        document.querySelectorAll('.content-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.id === targetId) {
                tab.classList.add('active');
            }
        });

        updateNavArrowsState(); // Update arrow state on tab change
    }

    document.addEventListener('DOMContentLoaded', () => {
        getEl('submit-name-btn').addEventListener('click', handleNameSubmit);
        getEl('management-name-input').addEventListener('keypress', (e) => { if (e.key === 'Enter') handleNameSubmit(); });
        getEl('content-area').addEventListener('click', handleAddRequest);
        getEl('summary-items').addEventListener('click', handleSummaryClick);
        getEl('submit-request-btn').addEventListener('click', generatePDF);
        getEl('main-nav').addEventListener('click', handleTabSwitching);
        
        // --- START: NAVIGATION ARROW LOGIC ---
        const prevBtn = getEl('nav-prev-btn');
        const nextBtn = getEl('nav-next-btn');
        const navLinks = document.querySelectorAll('.nav-link');

        window.updateNavArrowsState = function() { // Made global for easy access
            let activeIndex = -1;
            navLinks.forEach((link, index) => {
                if (link.classList.contains('active')) {
                    activeIndex = index;
                }
            });

            prevBtn.disabled = activeIndex === 0;
            nextBtn.disabled = activeIndex === navLinks.length - 1;

            if (activeIndex !== -1) {
                navLinks[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }

        nextBtn.addEventListener('click', () => {
            let activeIndex = Array.from(navLinks).findIndex(link => link.classList.contains('active'));
            if (activeIndex < navLinks.length - 1) {
                navLinks[activeIndex + 1].click();
            }
        });

        prevBtn.addEventListener('click', () => {
            let activeIndex = Array.from(navLinks).findIndex(link => link.classList.contains('active'));
            if (activeIndex > 0) {
                navLinks[activeIndex - 1].click();
            }
        });
        
        updateNavArrowsState(); // Initialize on load
        // --- END: NAVIGATION ARROW LOGIC ---


        // --- START: BACK TO TOP FEATURE ---
        const backToTopBtn = getEl('back-to-top-btn');
        if (backToTopBtn) {
            window.onscroll = function() {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    backToTopBtn.style.display = "block";
                } else {
                    backToTopBtn.style.display = "none";
                }
            };

            backToTopBtn.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        // --- END: BACK TO TOP FEATURE ---
    });
