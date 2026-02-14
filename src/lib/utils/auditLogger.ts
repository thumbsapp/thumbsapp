class AuditLogger {
  private logs: any[] = [];

  log(event: string, data: any) {
    const entry = { timestamp: new Date().toISOString(), event, data };
    this.logs.push(entry);
    console.log('AUDIT:', entry);
  }

  getLogs() {
    return this.logs;
  }
}

export const auditLogger = new AuditLogger();