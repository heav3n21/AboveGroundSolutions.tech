const createPdf = () => {

    autoTable(doc, {
        headStyles: {
            fillColor: "orange"
        }
        ,
        theme: 'grid',
        head: [[{ content: 'Above ground Solutions', rowSpan: 1, colSpan: 4 }, { content: '', rowSpan: 2, colSpan: 2 }, { colSpan: 2, rowSpan: 1, content: '' }, { colSpan: 2, rowSpan: 1, content: '' }, { colSpan: 2, rowSpan: 1, content: '' }, { colSpan: 2, rowSpan: 1, content: '' }, { colSpan: 4, rowSpan: 1, content: ' Page 1 of 2', styles: { halign: 'right' } }],
        [{ content: 'Complete Daily (before Beginning Work or for Pre-jon Analysis)', rowSpan: 1, colSpan: 16, styles: { textColor: 'black', } }],
        ],
        body: [

            [{ content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }, { content: 'dsfs', styles: { textColor: 'white' } }],
            [{ content: 'Job Safety Analyis', colSpan: 18, rowSpan: 1, styles: { halign: 'center', textColor: 'red' } }],



            [{ content: 'Job Information', colSpan: 18, rowSpan: 1, styles: { halign: 'center', fillColor: '#828282', textColor: 'black', fontSize: 8.5 }, }],
            [{ content: `Date: `, colSpan: 3, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: `Job Name:`, colSpan: 3, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: `Job #`, colSpan: 3, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: `Physical Address: `, colSpan: 9, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } },],
            ["", { content: `SuperVisor: `, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: `Longitude:`, colSpan: 5, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: `Latitude`, colSpan: 5, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } },],


            [{ content: 'Project Personnel', colSpan: 18, rowSpan: 1, styles: { halign: 'center', fillColor: '#828282', textColor: 'black', fontSize: 8.5 }, }],
            [{ content: 'Name:', colSpan: 4, rowSpan: 1, styles: { halign: 'center', } }, { content: 'Company:', colSpan: 3, rowSpan: 1, styles: { halign: 'center', } }, { content: 'CPR/  FirstAid ', colSpan: 1, rowSpan: 1, styles: { halign: 'center', fontSize: 5.8, textColor: "black" } }, { content: 'Certified Climber ', colSpan: 1, rowSpan: 1, styles: { halign: 'center', textColor: "black", fontSize: 5.3 } }, { content: 'Name:', colSpan: 4, rowSpan: 1, styles: { halign: 'center', } }, { content: 'Company:', colSpan: 3, rowSpan: 1, styles: { halign: 'center' } }, { content: 'CPR/  FirstAid ', colSpan: 1, rowSpan: 1, styles: { halign: 'center', fontSize: 5.8, text: 'black' } }, { content: 'Certified Climber ', colSpan: 1, rowSpan: 1, styles: { halign: 'center', textColor: "black", fontSize: 5.3 } }],
            [{ content: 'carlos Garcia', colSpan: 4, rowSpan: 1, styles: { halign: 'center' } }, { content: 'NuWave:', colSpan: 3, rowSpan: 1, styles: { halign: 'center' } }, { content: '_', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }, { content: '_ ', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 4, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 3, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }],
            [{ content: 'carlos Garcia', colSpan: 4, rowSpan: 1, styles: { halign: 'center' } }, { content: 'NuWave:', colSpan: 3, rowSpan: 1, styles: { halign: 'center' } }, { content: '_', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }, { content: '_ ', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 4, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 3, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }],
            [{ content: 'carlos Garcia', colSpan: 4, rowSpan: 1, styles: { halign: 'center' } }, { content: 'NuWave:', colSpan: 3, rowSpan: 1, styles: { halign: 'center' } }, { content: '_', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }, { content: '_ ', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 4, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 3, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }],
            [{ content: 'carlos Garcia', colSpan: 4, rowSpan: 1, styles: { halign: 'center' } }, { content: 'NuWave:', colSpan: 3, rowSpan: 1, styles: { halign: 'center' } }, { content: '_', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }, { content: '_ ', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 4, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 3, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }],
            [{ content: 'carlos Garcia', colSpan: 4, rowSpan: 1, styles: { halign: 'center' } }, { content: 'NuWave:', colSpan: 3, rowSpan: 1, styles: { halign: 'center' } }, { content: '_', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }, { content: '_ ', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 4, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 3, rowSpan: 1, styles: { halign: 'center' } }, { content: '', colSpan: 1, rowSpan: 1, styles: { halign: 'center' } }],


            [{ content: 'Emergency Porcedures', colSpan: 18, rowSpan: 1, styles: { halign: 'center', fillColor: '#828282', textColor: 'black', fontSize: 8.5 }, }],

            [{ content: 'List telephone numbers and attach drections to the site:', colSpan: 18, rowSpan: 1, styles: { halign: 'left', fontSize: 8 } }],
            [{ content: 'Are 911 systems functional with cell phone use?:', colSpan: 18, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }],
            [{ content: 'Tower Rescue Procedures / work being performed:?:', colSpan: 18, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }],
            [{ content: `Ambulance:`, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: `Police:`, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: `Fire:`, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }],
            [{ content: `Local Hospital:`, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: `Telephone Co:`, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: `Utility co:`, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }],
            [{ content: `Evacuation Point:`, colSpan: 12, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: ``, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } },],


            [{ content: 'Job Safety / Task for Today', colSpan: 18, rowSpan: 1, styles: { halign: 'center', fillColor: '#828282', textColor: 'black', fontSize: 8.5 }, }],
            [{ content: '', rowSpan: 1 }, { content: `Check safety procedures/ work being performe:`, colSpan: 8, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5, lineColor: 'white' } }, { content: ``, colSpan: 5, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5, lineColor: 'white' } }, { content: ``, colSpan: 3, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5, lineColor: 'white' } }],
            [{ content: '', rowSpan: 1 }, { content: `_ First Aid Kit on site `, colSpan: 8, rowSpan: 1, styles: { halign: 'left', fontSize: 8, lineColor: 'white' } }, { content: `_ tower Erection`, colSpan: 5, rowSpan: 1, styles: { halign: 'left', fontSize: 8, lineColor: 'white' } }, { content: `_ Electrical`, colSpan: 3, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5, lineColor: 'white' } }],
            [{ content: '', rowSpan: 1 }, { content: `_ Rescue Bag at Base of Tower`, colSpan: 8, rowSpan: 1, styles: { halign: 'left', fontSize: 8, lineColor: 'white' } }, { content: `_ Line and Antennas`, colSpan: 5, rowSpan: 1, styles: { halign: 'left', fontSize: 8, lineColor: 'white' } }, { content: `_ Civil / concrete`, colSpan: 3, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5, lineColor: 'white' } }],
            [{ content: '', rowSpan: 1 }, { content: `_ Other: Please Describe`, colSpan: 8, rowSpan: 1, styles: { halign: 'left', fontSize: 8, lineColor: 'white' } }, { content: ``, colSpan: 5, rowSpan: 1, styles: { halign: 'left', fontSize: 8, lineColor: 'white' } }, { content: ``, colSpan: 3, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5, lineColor: 'white' } }],

            [{ content: 'RF Signage & MPE readings', colSpan: 18, rowSpan: 1, styles: { halign: 'center', fillColor: '#828282', textColor: 'black', fontSize: 8.5 }, fontSize: 8.5 }],
            [{ content: `Blue Notice Sign _`, colSpan: 5, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: `_ Yellow Caution Sign`, colSpan: 4, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: `_red Warning Sign`, colSpan: 5, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: `_ Red Danger Sign`, colSpan: 4, rowSpan: 1, styles: { halign: 'left', fontSize: 8 } }],
            [{ content: `Eeuipment MPE reading:`, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 5.5 } }, { content: `Equipement MPE reading:`, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 5.5 } }, { content: `Equiment Mpe reading:`, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 5.5 } }],
            [{ content: `Elevation MPE reading:`, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 5.5 } }, { content: `Elevation MPE reading::`, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 5.5 } }, { content: `Elevation MPE reading:`, colSpan: 6, rowSpan: 1, styles: { halign: 'left', fontSize: 5.5 } }],

            [{ content: `Job/Tasks (Be Specific)`, colSpan: 7, rowSpan: 1, styles: { halign: 'left', fillColor: '#828282', textColor: 'black', fontSize: 8.5 } }, { content: `Potential Hazards (Be specific)`, colSpan: 4, rowSpan: 1, styles: { halign: 'left', fillColor: '#828282', textColor: 'black', fontSize: 8.5 } }, { content: `Preventive Measures`, colSpan: 7, rowSpan: 1, styles: { halign: 'left', fillColor: '#828282', textColor: 'black', fontSize: 8.5 } }],


            [{
                content: `sdfsdfsfdsfsdfsadfsadfdfsx dsfsdfsadfsadfdfsx dsfsdfsadfsadfdfsxdsfsdfsadfsadfdfsxdsfsdfsadfsadfdfsxdsfsdfsadfsadfdfsx
            dsfsdfsadfsadfdfsxdsfsdfsadfsadfdfsxdsfsdfsadfsadfdfsxdsfsdfsadfsadfdfsxdsfsdfsadfsadfdfsxdsfsdfsadfsadfdfsxdsfsdfsadfsadfdfsx dsfsdfsadfsadfdfsx`, colSpan: 7, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 }
            }, { content: `Potential Hazards (Be specific)`, colSpan: 4, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }, { content: `Preventive Measures`, colSpan: 7, rowSpan: 1, styles: { halign: 'left', fontSize: 8.5 } }],

        ],


    })

    // doc.addImage(img, 'PNG', 40, 15, 20, 10);
    doc.save("a4.pdf");
}