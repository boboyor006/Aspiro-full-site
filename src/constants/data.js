import images from "./images"

const data = {
    user: {
        name: 'Aspiro',
        img: images.avt
    },
    summary: [
        {
            title: "O'quvchilar soni ",
            subtitle: 'statiklari',
            value: '500+',
            percent: 70
        },
        {
            title: 'Yonalishlar ',
            subtitle:"Muttaxaslikga ega bo'lgan ustozlar",
            value: '15+',
            percent: 49
        },
        {
            title: 'Kurslar ',
            subtitle: 'kurslarimizni narxi aksiyada ',
            value: '20%',
            percent: 20
        },
        {
            title: 'Oquvhcilar ishga kirish',
            subtitle: "Aspiro o'quv markazini yo'nalishlari",
            value: '20+',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Kursimiz narxi',
        value: '500 ming',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '100+',
            title: "Ma'lumotlarimiz" 
        },
        {
            value: '500+',
            title: "O'quvchilar"
        },
        {
            value: '15',
            title: "Yo'nalishlar"
        },
        {
            value: '500ming',
            title: 'Maksimal kursimiz narxi'
        }
    ],
    revenueByChannel: [
        {
            title: 'Ingliz tili ',
            value: 70
        },
        {
            title: 'Matematika',
            value: 40
        },
        {
            title: 'Ona tili',
            value: 60
        },
        {
            title: 'Yapon tili',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data