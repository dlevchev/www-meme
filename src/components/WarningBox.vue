<template>
  <div class="warning-box">
    <div class="warning-icon">⚠️</div>
    <p>This is a meme coin with no intrinsic value or expectation of financial return. Everything went wrong. Again.</p>
  </div>
</template>

<style scoped>
.warning-box {
  background: rgba(255,255,0,0.2);
  border: 3px solid #ffff00;
  padding: 30px;
  margin: 50px 0;
  display: flex;
  align-items: center;
  gap: 20px;
}

.warning-icon {
  font-size: 48px;
  animation: shake 2s infinite;
}

.warning-box p {
  text-align: left;
  font-size: 14px;
  line-height: 1.6;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@media (max-width: 768px) {
  .warning-box {
    flex-direction: column;
  }
}
</style>
