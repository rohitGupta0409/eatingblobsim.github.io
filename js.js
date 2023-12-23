// js.js

// Function to return Lua code
function getLuaCode() {
  return `
    -- Your Lua code for Roblox
    local part = Instance.new("Part")
    part.Size = Vector3.new(10, 5, 3)
    part.Anchored = true
    part.Position = Vector3.new(0, 10, 0)
    part.Parent = workspace
  `;
}

// Return the Lua code
getLuaCode();
