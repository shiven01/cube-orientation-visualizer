// This file contains the parsed quaternion data
const quaternionData = [];

// Function to parse quaternion data from text
const parseQuaternionDataFromString = (text) => {
    // Reset the quaternion data array
    quaternionData.length = 0;
    
    // Find all quaternion readings in the data
    const regex = /Timestamp: (\d+)[\s\S]*?Quaternion \(w,x,y,z\): \(([\d\.-]+), ([\d\.-]+), ([\d\.-]+), ([\d\.-]+)\)/g;
    
    let match;
    while ((match = regex.exec(text)) !== null) {
        const timestamp = parseInt(match[1]);
        const w = parseFloat(match[2]);
        const x = parseFloat(match[3]);
        const y = parseFloat(match[4]);
        const z = parseFloat(match[5]);
        
        quaternionData.push({
            timestamp,
            quaternion: { w, x, y, z }
        });
    }
    
    // Sort data by timestamp if needed
    quaternionData.sort((a, b) => a.timestamp - b.timestamp);
    
    console.log(`Parsed ${quaternionData.length} quaternion readings`);
};

// Use the complete provided data
const fullData = `Sensor: Sensor-1
Timestamp: 116601286
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8807, -0.0097, -0.0026, 0.4736)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.00, 0.00, 0.00)
2025-03-30 12:24:10,759 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116617953
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8807, -0.0098, -0.0028, 0.4737)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.08, 0.30, 0.32)
2025-03-30 12:24:10,789 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116634620
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8806, -0.0095, -0.0031, 0.4737)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.05, 0.36, 0.36)
2025-03-30 12:24:10,790 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116651287
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8808, -0.0093, -0.0032, 0.4735)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.10, 0.35, 0.25)
2025-03-30 12:24:10,820 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116667954
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8806, -0.0093, -0.0032, 0.4737)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.15, 0.29, 0.23)
2025-03-30 12:24:10,822 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116684621
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8807, -0.0093, -0.0032, 0.4736)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.25, 0.23)
2025-03-30 12:24:10,851 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116701288
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8807, -0.0093, -0.0032, 0.4735)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.36, 0.29)
2025-03-30 12:24:10,851 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116717955
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8807, -0.0093, -0.0031, 0.4736)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.15, 0.28, 0.29)
2025-03-30 12:24:10,880 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116734622
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8806, -0.0093, -0.0031, 0.4737)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.12, 0.25, 0.32)
2025-03-30 12:24:10,880 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116751289
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8806, -0.0093, -0.0030, 0.4738)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.10, 0.21, 0.29)
2025-03-30 12:24:10,910 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116767956
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8806, -0.0093, -0.0030, 0.4737)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.12, 0.25, 0.37)
2025-03-30 12:24:10,911 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116784623
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8806, -0.0093, -0.0030, 0.4738)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.10, 0.29, 0.24)
2025-03-30 12:24:10,942 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116801290
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8806, -0.0093, -0.0029, 0.4739)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.21, 0.35, 0.42)
2025-03-30 12:24:10,969 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116817957
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8805, -0.0093, -0.0029, 0.4739)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.37, 0.31)
2025-03-30 12:24:10,972 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116834624
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8805, -0.0093, -0.0028, 0.4739)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.07, 0.35, 0.28)
2025-03-30 12:24:11,000 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116851291
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8805, -0.0093, -0.0028, 0.4740)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.06, 0.27, 0.21)
2025-03-30 12:24:11,000 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116867958
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8805, -0.0093, -0.0028, 0.4740)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.18, 0.32, 0.29)
2025-03-30 12:24:11,030 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116884625
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8804, -0.0093, -0.0027, 0.4740)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.36, 0.28)
2025-03-30 12:24:11,031 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116901292
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8804, -0.0093, -0.0027, 0.4741)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.15, 0.27, 0.37)
2025-03-30 12:24:11,060 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116917959
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8804, -0.0094, -0.0027, 0.4742)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.40, 0.24)
2025-03-30 12:24:11,061 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116934626
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8804, -0.0094, -0.0026, 0.4742)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.06, 0.39, 0.34)
2025-03-30 12:24:11,089 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116951293
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8804, -0.0094, -0.0026, 0.4742)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.06, 0.32, 0.26)
2025-03-30 12:24:11,121 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116967960
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8804, -0.0094, -0.0026, 0.4742)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.08, 0.25, 0.29)
2025-03-30 12:24:11,121 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 116984627
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0094, -0.0025, 0.4743)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.16, 0.22, 0.34)
2025-03-30 12:24:11,150 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117001294
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0094, -0.0025, 0.4743)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.14, 0.35, 0.34)
2025-03-30 12:24:11,151 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117017961
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0094, -0.0025, 0.4744)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.07, 0.37, 0.19)
2025-03-30 12:24:11,180 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117034628
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0094, -0.0024, 0.4743)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.34, 0.26)
2025-03-30 12:24:11,181 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117051295
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0094, -0.0024, 0.4744)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.16, 0.27, 0.35)
2025-03-30 12:24:11,209 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117067962
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0094, -0.0024, 0.4744)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.24, 0.30)
2025-03-30 12:24:11,210 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117084629
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0094, -0.0023, 0.4744)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.27, 0.26)
2025-03-30 12:24:11,239 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117101296
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0094, -0.0023, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.19, 0.32, 0.40)
2025-03-30 12:24:11,269 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117117963
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0094, -0.0023, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.29, 0.33)
2025-03-30 12:24:11,270 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117134630
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0094, -0.0022, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.33, 0.32)
2025-03-30 12:24:11,300 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117151297
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0094, -0.0022, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.36, 0.35)
2025-03-30 12:24:11,301 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117167964
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0021, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.10, 0.37, 0.32)
2025-03-30 12:24:11,329 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117184631
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0021, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.05, 0.30, 0.39)
2025-03-30 12:24:11,330 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117201298
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0021, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.15, 0.22, 0.33)
2025-03-30 12:24:11,359 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117217965
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0021, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.24, 0.42)
2025-03-30 12:24:11,360 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117234632
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0020, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.27, 0.41)
2025-03-30 12:24:11,389 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117251299
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0020, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.16, 0.34, 0.31)
2025-03-30 12:24:11,420 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117267966
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0020, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.24, 0.32)
2025-03-30 12:24:11,421 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117284633
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0019, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.06, 0.33, 0.36)
2025-03-30 12:24:11,449 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117301300
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0019, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.31, 0.37)
2025-03-30 12:24:11,450 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117317967
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0019, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.10, 0.26, 0.36)
2025-03-30 12:24:11,480 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117334634
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0019, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.08, 0.20, 0.35)
2025-03-30 12:24:11,481 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117351301
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0018, 0.4745)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.17, 0.22, 0.36)
2025-03-30 12:24:11,511 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117367968
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0018, 0.4744)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.12, 0.31, 0.36)
2025-03-30 12:24:11,512 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117384635
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8802, -0.0095, -0.0017, 0.4744)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.03, 0.45, 0.34)
2025-03-30 12:24:11,540 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117401302
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0095, -0.0017, 0.4744)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.35, 0.36)
2025-03-30 12:24:11,569 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117417969
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0095, -0.0017, 0.4744)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.12, 0.22, 0.27)
2025-03-30 12:24:11,570 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117434636
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0095, -0.0017, 0.4743)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.15, 0.15, 0.26)
2025-03-30 12:24:11,599 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117451303
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0095, -0.0016, 0.4743)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.07, 0.23, 0.37)
2025-03-30 12:24:11,600 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117467970
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0095, -0.0016, 0.4743)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.31, 0.19)
2025-03-30 12:24:11,629 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117484637
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0096, -0.0016, 0.4742)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.04, 0.46, 0.30)
2025-03-30 12:24:11,630 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117501304
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0096, -0.0015, 0.4742)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.17, 0.40, 0.30)
2025-03-30 12:24:11,659 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117517971
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0096, -0.0015, 0.4743)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.08, 0.25, 0.36)
2025-03-30 12:24:11,660 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117534638
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0096, -0.0015, 0.4743)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.09, 0.28)
2025-03-30 12:24:11,689 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117551305
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8803, -0.0095, -0.0015, 0.4742)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.16, 0.22, 0.35)
2025-03-30 12:24:11,719 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117567972
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8804, -0.0096, -0.0014, 0.4742)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.47, 0.37)
2025-03-30 12:24:11,720 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117584639
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8804, -0.0096, -0.0014, 0.4741)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.14, 0.41, 0.29)
2025-03-30 12:24:11,749 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117601306
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8804, -0.0096, -0.0013, 0.4741)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.07, 0.38, 0.30)
2025-03-30 12:24:11,750 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117617973
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8804, -0.0096, -0.0013, 0.4742)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.12, 0.24, 0.35)
2025-03-30 12:24:11,779 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117634640
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8804, -0.0096, -0.0013, 0.4741)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.31, 0.38)
2025-03-30 12:24:11,780 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117651307
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8805, -0.0096, -0.0012, 0.4740)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.17, 0.30, 0.29)
2025-03-30 12:24:11,809 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117667974
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8805, -0.0096, -0.0012, 0.4740)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.08, 0.38, 0.31)
2025-03-30 12:24:11,810 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117684641
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8805, -0.0096, -0.0012, 0.4739)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.22, 0.30)
2025-03-30 12:24:11,840 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117701308
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8806, -0.0096, -0.0012, 0.4738)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.10, 0.21, 0.31)
2025-03-30 12:24:11,870 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117717975
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8806, -0.0096, -0.0011, 0.4737)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.04, 0.30, 0.30)
2025-03-30 12:24:11,871 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117734642
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8806, -0.0096, -0.0011, 0.4737)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.15, 0.30, 0.35)
2025-03-30 12:24:11,901 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117751309
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8807, -0.0096, -0.0011, 0.4736)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.10, 0.34, 0.30)
2025-03-30 12:24:11,901 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117767976
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8807, -0.0096, -0.0010, 0.4736)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.35, 0.30)
2025-03-30 12:24:11,929 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117784643
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8807, -0.0097, -0.0010, 0.4735)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.06, 0.33, 0.29)
2025-03-30 12:24:11,930 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117801310
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8807, -0.0097, -0.0010, 0.4735)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.14, 0.28, 0.28)
2025-03-30 12:24:11,959 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117817977
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8808, -0.0097, -0.0009, 0.4735)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.29, 0.27)
2025-03-30 12:24:11,989 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117834644
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8808, -0.0097, -0.0009, 0.4734)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.15, 0.24, 0.39)
2025-03-30 12:24:11,990 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117851311
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8808, -0.0096, -0.0009, 0.4733)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.14, 0.28, 0.33)
2025-03-30 12:24:12,019 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117867978
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8808, -0.0097, -0.0008, 0.4733)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.38, 0.38)
2025-03-30 12:24:12,020 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117884645
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8808, -0.0097, -0.0008, 0.4733)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.07, 0.43, 0.36)
2025-03-30 12:24:12,049 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117901312
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8808, -0.0097, -0.0008, 0.4733)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.15, 0.25, 0.25)
2025-03-30 12:24:12,052 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117917979
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8809, -0.0097, -0.0008, 0.4733)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.05, 0.17, 0.26)
2025-03-30 12:24:12,080 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117934646
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8809, -0.0097, -0.0008, 0.4732)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.04, 0.15, 0.26)
2025-03-30 12:24:12,081 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117951313
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8809, -0.0097, -0.0007, 0.4732)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.16, 0.38, 0.27)
2025-03-30 12:24:12,110 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117967980
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0097, -0.0007, 0.4731)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.07, 0.40, 0.34)
2025-03-30 12:24:12,111 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 117984647
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0097, -0.0006, 0.4731)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.35, 0.38)
2025-03-30 12:24:12,141 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118001314
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0097, -0.0006, 0.4731)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.25, 0.32)
2025-03-30 12:24:12,239 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118017981
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0097, -0.0006, 0.4730)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.10, 0.20, 0.31)
2025-03-30 12:24:12,285 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118034648
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0097, -0.0006, 0.4730)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.02, 0.26, 0.34)
2025-03-30 12:24:12,288 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118051315
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0097, -0.0005, 0.4730)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.12, 0.41, 0.35)
2025-03-30 12:24:12,288 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118067982
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0097, -0.0005, 0.4730)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.07, 0.37, 0.29)
2025-03-30 12:24:12,289 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118084649
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0097, -0.0005, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.31, 0.30)
2025-03-30 12:24:12,289 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118101316
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0097, -0.0004, 0.4728)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.39, 0.35)
2025-03-30 12:24:12,289 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118117983
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0098, -0.0004, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.05, 0.30, 0.32)
2025-03-30 12:24:12,290 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118134650
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0098, -0.0004, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.15, 0.37, 0.34)
2025-03-30 12:24:12,290 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118151317
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0098, -0.0004, 0.4728)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.23, 0.31)
2025-03-30 12:24:12,320 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118167984
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0098, -0.0004, 0.4728)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.12, 0.19, 0.32)
2025-03-30 12:24:12,321 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118184651
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8812, -0.0098, -0.0003, 0.4727)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.15, 0.37, 0.29)
2025-03-30 12:24:12,351 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118201318
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8812, -0.0098, -0.0003, 0.4727)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.35, 0.33)
2025-03-30 12:24:12,352 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118217985
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8812, -0.0098, -0.0003, 0.4726)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.25, 0.26)
2025-03-30 12:24:12,382 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118234652
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8812, -0.0098, -0.0003, 0.4726)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.22, 0.31)
2025-03-30 12:24:12,384 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118251319
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8812, -0.0098, -0.0002, 0.4727)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.27, 0.28)
2025-03-30 12:24:12,440 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118267986
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8812, -0.0098, -0.0002, 0.4727)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.15, 0.36, 0.40)
2025-03-30 12:24:12,445 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118284653
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8812, -0.0098, -0.0002, 0.4726)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.36, 0.30)
2025-03-30 12:24:12,447 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118301320
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8812, -0.0098, -0.0002, 0.4726)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.07, 0.32, 0.36)
2025-03-30 12:24:12,471 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118317987
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8812, -0.0098, -0.0001, 0.4726)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.27, 0.35)
2025-03-30 12:24:12,472 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118334654
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8812, -0.0098, -0.0001, 0.4726)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.08, 0.37, 0.35)
2025-03-30 12:24:12,502 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118351321
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8812, -0.0098, -0.0001, 0.4726)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.12, 0.32, 0.35)
2025-03-30 12:24:12,529 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118367988
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8813, -0.0098, -0.0001, 0.4725)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.26, 0.34)
2025-03-30 12:24:12,530 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118384655
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8813, -0.0098, -0.0001, 0.4724)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.10, 0.25, 0.32)
2025-03-30 12:24:12,530 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118401322
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8813, -0.0098, -0.0000, 0.4724)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.21, 0.31)
2025-03-30 12:24:12,559 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118417989
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8813, -0.0098, -0.0000, 0.4724)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.14, 0.33, 0.24)
2025-03-30 12:24:12,560 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118434656
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8813, -0.0098, 0.0000, 0.4724)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.15, 0.33, 0.33)
2025-03-30 12:24:12,590 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118451323
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8813, -0.0098, 0.0000, 0.4724)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.01, 0.36, 0.38)
2025-03-30 12:24:12,619 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118467990
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8814, -0.0098, 0.0000, 0.4723)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.10, 0.30, 0.31)
2025-03-30 12:24:12,620 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118484657
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8814, -0.0098, 0.0001, 0.4723)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.10, 0.32, 0.30)
2025-03-30 12:24:12,649 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118501324
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8814, -0.0098, 0.0001, 0.4723)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.16, 0.31, 0.31)
2025-03-30 12:24:12,650 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118517991
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8814, -0.0098, 0.0001, 0.4723)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.34, 0.30)
2025-03-30 12:24:12,680 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118534658
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8814, -0.0098, 0.0001, 0.4722)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.07, 0.31, 0.28)
2025-03-30 12:24:12,683 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118551325
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8814, -0.0098, 0.0001, 0.4722)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.20, 0.34)
2025-03-30 12:24:12,709 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118567992
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8814, -0.0098, 0.0001, 0.4722)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.12, 0.35, 0.29)
2025-03-30 12:24:12,710 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118584659
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0033, 0.4727)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.16, 0.35, 0.26)
2025-03-30 12:24:12,741 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118601326
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4727)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.03, 0.45, 0.27)
2025-03-30 12:24:12,769 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118617993
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4728)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.16, 0.32, 0.32)
2025-03-30 12:24:12,770 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118634660
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0033, 0.4728)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.10, 0.19, 0.28)
2025-03-30 12:24:12,801 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118651327
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0033, 0.4728)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.19, 0.20, 0.34)
2025-03-30 12:24:12,802 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118667994
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0033, 0.4728)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.07, 0.36, 0.35)
2025-03-30 12:24:12,829 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118684661
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0033, 0.4728)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.12, 0.35, 0.29)
2025-03-30 12:24:12,830 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118701328
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4728)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.14, 0.43, 0.30)
2025-03-30 12:24:12,861 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118717995
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4728)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.12, 0.33, 0.38)
2025-03-30 12:24:12,861 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118734662
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.18, 0.34)
2025-03-30 12:24:12,889 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118751329
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.10, 0.26, 0.31)
2025-03-30 12:24:12,920 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118767996
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0033, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.27, 0.31)
2025-03-30 12:24:12,921 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118784663
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.37, 0.33)
2025-03-30 12:24:12,954 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118801330
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.31, 0.36)
2025-03-30 12:24:12,955 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118817997
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.36, 0.28)
2025-03-30 12:24:12,979 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118834664
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.14, 0.34, 0.34)
2025-03-30 12:24:12,980 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118851331
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.08, 0.23, 0.29)
2025-03-30 12:24:13,037 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118867998
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.26, 0.31)
2025-03-30 12:24:13,039 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118884665
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0033, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.06, 0.25, 0.27)
2025-03-30 12:24:13,045 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118901332
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.13, 0.36, 0.27)
2025-03-30 12:24:13,069 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118917999
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.29, 0.32)
2025-03-30 12:24:13,070 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118934666
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.07, 0.32, 0.28)
2025-03-30 12:24:13,099 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118951333
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0033, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.08, 0.23, 0.33)
2025-03-30 12:24:13,100 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118968000
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0093, -0.0033, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.12, 0.21, 0.38)
2025-03-30 12:24:13,129 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 118984667
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0093, -0.0033, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.08, 0.29, 0.36)
2025-03-30 12:24:13,130 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119001334
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0093, -0.0033, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.14, 0.33, 0.32)
2025-03-30 12:24:13,161 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119018001
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0093, -0.0033, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.06, 0.29, 0.32)
2025-03-30 12:24:13,162 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119034668
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0093, -0.0033, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.12, 0.27, 0.28)
2025-03-30 12:24:13,190 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119051335
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0093, -0.0033, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.33, 0.32)
2025-03-30 12:24:13,222 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119068002
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0093, -0.0033, 0.4729)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.41, 0.38)
2025-03-30 12:24:13,222 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119084669
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0093, -0.0033, 0.4730)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.09, 0.30, 0.32)
2025-03-30 12:24:13,249 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119101336
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0094, -0.0033, 0.4730)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.03, 0.24, 0.38)
2025-03-30 12:24:13,250 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119118003
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8810, -0.0094, -0.0033, 0.4730)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.11, 0.25, 0.29)
2025-03-30 12:24:13,280 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119134670
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8811, -0.0093, -0.0032, 0.4728)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (0.88, 0.60, -0.71)
2025-03-30 12:24:13,281 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119151337
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.8868, -0.0084, 0.0002, 0.4620)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (16.14, 18.71, -83.85)
2025-03-30 12:24:13,310 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119168004
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.9009, -0.0085, 0.0004, 0.4339)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (1.14, 3.36, -216.15)
2025-03-30 12:24:13,311 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119184671
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.9019, -0.0138, 0.0053, 0.4316)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (-17.48, 46.67, -16.34)
2025-03-30 12:24:13,340 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119201338
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.9055, -0.0167, 0.0038, 0.4240)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (-22.16, 0.47, -57.59)
2025-03-30 12:24:13,371 - root - INFO - Quaternion Data:
Sensor: Sensor-1
Timestamp: 119218005
Sensor: Sensor-1
Quaternion (w,x,y,z): (0.9067, -0.0138, 0.0021, 0.4215)
Free acceleration (m/s²): (0.00, 0.00, 0.00)
Angular Velocity (dps): (13.36, -18.60, -18.63)`;

// Parse the data
parseQuaternionDataFromString(fullData);

// In a real application, you would use something like this to load the data from a file:
/*
fetch('quaternion-data.txt')
    .then(response => response.text())
    .then(data => {
        parseQuaternionDataFromString(data);
    })
    .catch(error => {
        console.error('Error loading quaternion data:', error);
    });
*/