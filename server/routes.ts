import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { getChatCompletion } from "../client/src/lib/chat";

export async function registerRoutes(app: Express) {
  // Get all messages
  app.get("/api/messages", async (_req, res) => {
    const messages = await storage.getMessages();
    res.json(messages);
  });

  // Create a new message
  app.post("/api/messages", async (req, res) => {
    const result = insertMessageSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: "Invalid message data" });
    }

    const message = await storage.createMessage(result.data);
    res.json(message);
  });

  // Chat completion endpoint
  app.post("/api/chat", async (req, res) => {
    const { content } = req.body;
    if (!content || typeof content !== "string") {
      return res.status(400).json({ error: "Content is required" });
    }

    try {
      const completion = await getChatCompletion(content);
      if (!completion) {
        return res.status(500).json({ error: "No response from OpenRouter" });
      }

      const message = await storage.createMessage({
        content: completion,
        role: "assistant"
      });
      res.json(message);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: errorMessage });
    }
  });

  return createServer(app);
}