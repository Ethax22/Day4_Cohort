const AUTH_TOKEN = "devtoken";

async function create() {
  const title = document.getElementById("title").value;
  const secret = document.getElementById("secret").value;
  const amount = Number(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  try {
    const response = await fetch("/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${AUTH_TOKEN}`
      },
      body: JSON.stringify({ title, secret, amount, type })
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(`Error: ${errorData.message || errorData.error}`);
      return;
    }


    document.getElementById("title").value = "";
    document.getElementById("secret").value = "";
    document.getElementById("amount").value = "";

    load();
  } catch (err) {
    console.error("Failed to create transaction", err);
  }
}

async function remove(id) {
  try {
    await fetch(`/api/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${AUTH_TOKEN}`
      }
    });
    load();
  } catch (err) {
    console.error("Failed to delete", err);
  }
}

async function load() {
  try {
    const res = await fetch("/api/list", {
      headers: {
        "Authorization": `Bearer ${AUTH_TOKEN}`
      }
    });

    if (!res.ok) throw new Error("Failed to load");


    const responseData = await res.json();
    const data = responseData.transactions;
    const balance = responseData.balance;


    document.getElementById("balance").innerText = balance;


    const container = document.getElementById("list");
    container.innerHTML = "";

    data.forEach(d => {

      const color = d.type === 'income' ? 'green' : 'red';
      const symbol = d.type === 'income' ? '+' : '-';

      container.innerHTML += `
        <div style="border: 1px solid #ccc; padding: 10px; margin: 5px 0; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <strong>${d.title}</strong> 
            <span style="color: ${color}">(${symbol}$${d.amount || 0})</span>
            <br>
            <small style="color: #666">Secret ID: ${d.secret.substring(0, 10)}...</small>
          </div>
          <button onclick="remove(${d.id})" style="background: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">Delete</button>
        </div>
      `;
    });
  } catch (err) {
    console.error("Load failed", err);
  }
}


load();