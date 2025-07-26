import express from "express";
import { PrismaClient } from "../src/generated/prisma";

const app = express();
const client = new PrismaClient();
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await client.user.findMany({ include: { todo: true } });
    res.json({ users });
  } catch (error) {
    res.json({
      error,
    });
  }
});

async function createUser() {
  await client.user.create({
    data: {
      username: "nitn4",
      email: "Nitin4email.com",
      password: "12341",
      age: 23,
      city: "Pali",
    },
  });
}

const deleteUser = async () => {
  await client.user.delete({
    where: {
      id: 2,
    },
  });
};

const updateUser = async () => {
  await client.user.update({
    where: {
      id: 3,
    },
    data: {
      username: "updatedNitin",
    },
  });
};

app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id as unknown as number;
    const user = await client.user.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        todo : true,
      },
    });

    res.json({
      message: user,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

app.listen(5000, () => {
  console.log("Server started");
});
