// src/server.ts
import express from "express"
import { PrismaClient } from "../prisma/generated/prisma/client.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())

// Rotas Médicos
app.get("/doctors", async (req, res) => {
  try {
    const doctors = await prisma.doctor.findMany()
    res.json(doctors)
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar médicos" })
  }
})

// server.js
app.post('/doctors', async (req, res) => {
  const { name, email, specialty, avatarUrl } = req.body;

  // Validação simples
  if (!name || !email || !specialty) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando' });
  }

  try {
    const doctor = await prisma.doctor.create({
      data: {
        name,
        email,
        specialty,
        avatarUrl: avatarUrl || null
      }
    });
    res.status(201).json(doctor);
  } catch (error) {
    if (error.code === 'P2002') { // Erro de email único
      res.status(400).json({ error: 'Email já cadastrado' });
    } else {
      res.status(500).json({ error: 'Erro ao criar médico' });
    }
  }
});

// Rotas Pacientes
app.get("/patients", async (req, res) => {
  try {
    const patients = await prisma.patient.findMany({
      include: {
        vitalSigns: true,
        thresholds: true,
      },
    })
    res.json(patients)
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pacientes" })
  }
})

app.post("/patients", async (req, res) => {
  const { name, age, gender, room, status, medicalRecord, doctorId } = req.body
 
  try {
    const patient = await prisma.patient.create({
      data: {
        name,
        age,
        gender,
        room,
        status,
        medicalRecord,
        doctorId,
      },
    })  
    res.status(201).json(patient)
  } catch (error) {
    console.log('error', error)
    res.status(400).json({ error: "Erro ao criar paciente" ,message:error.message})
  }
})

// Rotas Sinais Vitais
app.put("/patients/:id/vitals", async (req, res) => {
  const { id } = req.params
  const { spo2, bpm, temperature } = req.body

  try {
    // Transação para atualizar sinais e criar histórico
    const result = await prisma.$transaction([
      prisma.vitalSign.upsert({
        where: { patientId: Number(id) },
        update: { spo2, bpm, temperature },
        create: { spo2, bpm, temperature, patientId: Number(id) },
      }),
      prisma.vitalSignHistory.create({
        data: {
          spo2,
          bpm,
          temperature,
          patientId: Number(id),
        },
      }),
    ])

    res.json(result[0]) // Retorna os sinais atualizados
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar sinais" })
  }
})

// Rotas Thresholds
app.put("/patients/:id/thresholds", async (req, res) => {
  const { id } = req.params
  const { spo2Min, spo2Max, bpmMin, bpmMax, tempMin, tempMax } = req.body
  try {
    const thresholds = await prisma.thresholdSettings.upsert({
      where: { patientId: Number(id) },
      update: { spo2Min, spo2Max, bpmMin, bpmMax, tempMin, tempMax },
      create: {
        spo2Min,
        spo2Max,
        bpmMin,
        bpmMax,
        tempMin,
        tempMax,
        patientId: Number(id),
      },
    })
    res.json(thresholds)
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar limites" })
  }
})

// Rotas Histórico
app.get("/patients/:id/history", async (req, res) => {
  const { id } = req.params
  try {
    const history = await prisma.vitalSignHistory.findMany({
      where: { patientId: Number(id) },
      orderBy: { createdAt: "desc" },
    })
    res.json(history)
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar histórico" })
  }
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
