import dayjs from "dayjs";

/**
 * 雪花算法单例类
 */
class Snowflake {
  private static instance: Snowflake;
  private sequence: number = 0;
  private lastTimestamp: number = -1;

  private constructor() {}

  /**
   * 获取单例实例
   */
  public static getInstance(): Snowflake {
    if (!Snowflake.instance) {
      Snowflake.instance = new Snowflake();
    }
    return Snowflake.instance;
  }

  /**
   * 生成下一个ID
   */
  public nextId(): string {
    let timestamp = Date.now();

    if (timestamp < this.lastTimestamp) {
      throw new Error("Clock moved backwards");
    }

    if (timestamp === this.lastTimestamp) {
      this.sequence = (this.sequence + 1) & 4095;
      if (this.sequence === 0) {
        timestamp = this.waitNextMillis(this.lastTimestamp);
      }
    } else {
      this.sequence = 0;
    }

    this.lastTimestamp = timestamp;

    // 直接返回时间戳+序列号的组合
    return `${timestamp}${this.sequence.toString().padStart(3, '0')}`;
  }

  /**
   * 等待下一个毫秒
   */
  private waitNextMillis(lastTimestamp: number): number {
    let timestamp = dayjs().valueOf();
    while (timestamp <= lastTimestamp) {
      timestamp = dayjs().valueOf();
    }
    return timestamp;
  }
}

/**
 * 导出生成唯一ID的函数
 */
export function generateSnowflakeId(): string {
  const id = Snowflake.getInstance().nextId();
  console.log("generateSnowflakeId", id);
  return id;
}
