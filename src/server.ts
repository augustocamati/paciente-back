// src/server.ts
import express from "express"
import { PrismaClient } from "@prisma/client"
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
    res.status(400).json({ error: "Erro ao criar paciente" })
  }
})

// Rotas Sinais Vitais
app.put("/patients/:id/vitals", async (req, res) => {
  const { id } = req.params
  const { spo2, bpm, temperature } = req.body
  try {
    const vitalSign = await prisma.vitalSign.upsert({
      where: { patientId: Number(id) },
      update: { spo2, bpm, temperature },
      create: {
        spo2,
        bpm,
        temperature,
        patientId: Number(id),
      },
    })
    res.json(vitalSign)
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar sinais vitais" })
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

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
