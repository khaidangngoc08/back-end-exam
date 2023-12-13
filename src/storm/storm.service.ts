import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Storm } from 'src/entities/storm.entity';
import { Repository } from 'typeorm';
import { MqttClient } from 'mqtt'; // import namespace "mqtt"
import mqtt from 'mqtt'; // import namespace "mqtt"

@Injectable()
export class StormService {
  private client: MqttClient;

  constructor(
    @InjectRepository(Storm)
    private stormsRepository: Repository<Storm>,
  ) {
    this.client = mqtt.connect(
      'mqtts://a3lafbeca71eu5-ats.iot.ap-southeast-1.amazonaws.com:8883',
      {
        key: 'https://test-upload-image-file.s3.ap-southeast-1.amazonaws.com/back-end-exam/private_key.key',
        cert: 'https://test-upload-image-file.s3.ap-southeast-1.amazonaws.com/back-end-exam/certificate.crt',
        ca: 'https://test-upload-image-file.s3.ap-southeast-1.amazonaws.com/back-end-exam/root_ca.pem',
      },
    );
  }

  async getStormsByCity(city: string): Promise<Storm[]> {
    return this.stormsRepository.find({
      where: { cityName: city },
      order: { cityName: 'DESC', detectedTime: 'ASC' },
    });
  }
}
