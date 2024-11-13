# AWS IAM Tracker

This project collects IAM actions, AWS APIs and managed policies from various public sources.

You can explore the data collected using [the static site](https://glassechidna.github.io/trackiam/).

Collected data is published to the [policies](/policies) and [services](/services) folders in this repo.

Thank you to [alanakirby/aktion](https://github.com/alanakirby/aktion) for originally 
having this idea and being gracious about me shamelessly ripping it off.
	
# Stats

* Unique services: 411
* Unique actions: 17830
* Managed policies: 1253

Most common managed policy name prefixes:

| Policy ARN | Count |
| ------ | ----- |
| `arn:aws:iam::aws:policy/AWS*` | 338 |
| `arn:aws:iam::aws:policy/Amazon*` | 323 |
| `arn:aws:iam::aws:policy/aws-service-role/*` | 285 |
| `arn:aws:iam::aws:policy/service-role/*` | 192 |
| `arn:aws:iam::aws:policy/job-function/*` | 7 |
| Other | 108 |

The following table summarises the AWS APIs. 

* The first column is the name of the API as far as IAM policies are concerned. 
* The second column is IAM actions that exactly match the names of invokable 
  APIs exposed by AWS.
* The third column is invokable APIs that don't have a corresponding IAM action.
* The fourth column is IAM actions that don't have a corresponding invokable API.

| Service | Action/API pairs | APIs without actions | Actions without APIs |
| ------ | ----- | ----- | ----- |
| [`ec2`](services/ec2.yml) | 625 | 0 | 28 |
| [`sagemaker`](services/sagemaker.yml) | 351 | 0 | 16 |
| [`iot`](services/iot.yml) | 262 | 3 | 12 |
| [`chime`](services/chime.yml) | 259 | 0 | 50 |
| [`connect`](services/connect.yml) | 256 | 0 | 17 |
| [`glue`](services/glue.yml) | 214 | 4 | 44 |
| [`ses`](services/ses.yml) | 193 | 0 | 0 |
| [`quicksight`](services/quicksight.yml) | 174 | 3 | 33 |
| [`rds`](services/rds.yml) | 162 | 0 | 6 |
| [`lightsail`](services/lightsail.yml) | 161 | 0 | 0 |
| [`iam`](services/iam.yml) | 159 | 0 | 12 |
| [`ssm`](services/ssm.yml) | 140 | 0 | 9 |
| [`lex`](services/lex.yml) | 137 | 4 | 8 |
| [`redshift`](services/redshift.yml) | 133 | 0 | 28 |
| [`datazone`](services/datazone.yml) | 123 | 0 | 45 |
| [`mobiletargeting`](services/mobiletargeting.yml) | 122 | 0 | 1 |
| [`servicecatalog`](services/servicecatalog.yml) | 114 | 0 | 3 |
| [`s3`](services/s3.yml) | 113 | 60 | 47 |
| [`iotwireless`](services/iotwireless.yml) | 112 | 0 | 1 |
| [`greengrass`](services/greengrass.yml) | 111 | 0 | 1 |
| [`cloudfront`](services/cloudfront.yml) | 110 | 1 | 7 |
| [`gamelift`](services/gamelift.yml) | 108 | 0 | 0 |
| [`dms`](services/dms.yml) | 106 | 0 | 28 |
| [`cognito-idp`](services/cognito-idp.yml) | 103 | 0 | 4 |
| [`deadline`](services/deadline.yml) | 102 | 0 | 3 |
| [`bedrock`](services/bedrock.yml) | 97 | 2 | 38 |
| [`medialive`](services/medialive.yml) | 92 | 0 | 24 |
| [`config`](services/config.yml) | 92 | 0 | 0 |
| [`backup`](services/backup.yml) | 91 | 0 | 5 |
| [`storagegateway`](services/storagegateway.yml) | 90 | 0 | 1 |
| [`workspaces`](services/workspaces.yml) | 88 | 0 | 1 |
| [`proton`](services/proton.yml) | 87 | 0 | 24 |
| [`es`](services/es.yml) | 87 | 0 | 18 |
| [`sms-voice`](services/sms-voice.yml) | 87 | 0 | 3 |
| [`networkmanager`](services/networkmanager.yml) | 85 | 0 | 0 |
| [`comprehend`](services/comprehend.yml) | 85 | 0 | 0 |
| [`workmail`](services/workmail.yml) | 84 | 0 | 42 |
| [`iotsitewise`](services/iotsitewise.yml) | 84 | 0 | 2 |
| [`cloudformation`](services/cloudformation.yml) | 82 | 0 | 11 |
| [`omics`](services/omics.yml) | 82 | 0 | 0 |
| [`waf-regional`](services/waf-regional.yml) | 81 | 0 | 0 |
| [`macie2`](services/macie2.yml) | 81 | 0 | 0 |
| [`codecommit`](services/codecommit.yml) | 79 | 0 | 11 |
| [`securityhub`](services/securityhub.yml) | 79 | 0 | 10 |
| [`personalize`](services/personalize.yml) | 78 | 0 | 5 |
| [`waf`](services/waf.yml) | 77 | 0 | 0 |
| [`devicefarm`](services/devicefarm.yml) | 77 | 0 | 0 |
| [`cleanrooms`](services/cleanrooms.yml) | 76 | 0 | 4 |
| [`appstream`](services/appstream.yml) | 75 | 0 | 5 |
| [`elasticache`](services/elasticache.yml) | 75 | 0 | 2 |
| [`rekognition`](services/rekognition.yml) | 75 | 0 | 1 |
| [`logs`](services/logs.yml) | 74 | 0 | 12 |
| [`guardduty`](services/guardduty.yml) | 74 | 0 | 1 |
| [`opsworks`](services/opsworks.yml) | 74 | 0 | 0 |
| [`sso`](services/sso.yml) | 73 | 0 | 53 |
| [`frauddetector`](services/frauddetector.yml) | 73 | 0 | 1 |
| [`imagebuilder`](services/imagebuilder.yml) | 73 | 0 | 0 |
| [`wellarchitected`](services/wellarchitected.yml) | 72 | 0 | 1 |
| [`mgn`](services/mgn.yml) | 70 | 0 | 34 |
| [`route53`](services/route53.yml) | 70 | 0 | 0 |
| [`athena`](services/athena.yml) | 68 | 0 | 11 |
| [`route53resolver`](services/route53resolver.yml) | 68 | 0 | 0 |
| [`ds`](services/ds.yml) | 67 | 0 | 14 |
| [`elasticloadbalancing`](services/elasticloadbalancing.yml) | 66 | 0 | 3 |
| [`kendra`](services/kendra.yml) | 66 | 0 | 0 |
| [`clouddirectory`](services/clouddirectory.yml) | 66 | 0 | 0 |
| [`forecast`](services/forecast.yml) | 65 | 0 | 5 |
| [`autoscaling`](services/autoscaling.yml) | 65 | 0 | 0 |
| [`appsync`](services/appsync.yml) | 64 | 0 | 19 |
| [`lambda`](services/lambda.yml) | 63 | 3 | 7 |
| [`ivs`](services/ivs.yml) | 63 | 0 | 5 |
| [`directconnect`](services/directconnect.yml) | 63 | 0 | 0 |
| [`auditmanager`](services/auditmanager.yml) | 62 | 0 | 0 |
| [`transfer`](services/transfer.yml) | 60 | 0 | 1 |
| [`geo`](services/geo.yml) | 60 | 0 | 0 |
| [`datasync`](services/datasync.yml) | 60 | 0 | 0 |
| [`inspector2`](services/inspector2.yml) | 59 | 0 | 0 |
| [`workspaces-web`](services/workspaces-web.yml) | 58 | 0 | 3 |
| [`robomaker`](services/robomaker.yml) | 57 | 0 | 2 |
| [`events`](services/events.yml) | 57 | 0 | 2 |
| [`dynamodb`](services/dynamodb.yml) | 56 | 5 | 13 |
| [`elasticmapreduce`](services/elasticmapreduce.yml) | 56 | 0 | 26 |
| [`ecs`](services/ecs.yml) | 56 | 0 | 5 |
| [`eks`](services/eks.yml) | 56 | 0 | 1 |
| [`globalaccelerator`](services/globalaccelerator.yml) | 56 | 0 | 0 |
| [`qbusiness`](services/qbusiness.yml) | 55 | 0 | 13 |
| [`resiliencehub`](services/resiliencehub.yml) | 55 | 0 | 5 |
| [`redshift-serverless`](services/redshift-serverless.yml) | 55 | 0 | 1 |
| [`organizations`](services/organizations.yml) | 55 | 0 | 0 |
| [`wafv2`](services/wafv2.yml) | 54 | 0 | 2 |
| [`lakeformation`](services/lakeformation.yml) | 52 | 3 | 1 |
| [`kms`](services/kms.yml) | 52 | 1 | 3 |
| [`profile`](services/profile.yml) | 52 | 0 | 15 |
| [`kafka`](services/kafka.yml) | 52 | 0 | 0 |
| [`iotfleetwise`](services/iotfleetwise.yml) | 52 | 0 | 0 |
| [`vpc-lattice`](services/vpc-lattice.yml) | 51 | 1 | 0 |
| [`mediaconnect`](services/mediaconnect.yml) | 51 | 0 | 4 |
| [`drs`](services/drs.yml) | 50 | 0 | 40 |
| [`finspace`](services/finspace.yml) | 50 | 0 | 9 |
| [`codebuild`](services/codebuild.yml) | 50 | 0 | 8 |
| [`license-manager`](services/license-manager.yml) | 50 | 0 | 0 |
| [`nimble`](services/nimble.yml) | 49 | 0 | 2 |
| [`lookoutequipment`](services/lookoutequipment.yml) | 49 | 0 | 0 |
| [`cloudtrail`](services/cloudtrail.yml) | 48 | 1 | 7 |
| [`codeartifact`](services/codeartifact.yml) | 48 | 0 | 3 |
| [`wisdom`](services/wisdom.yml) | 47 | 0 | 34 |
| [`ecr`](services/ecr.yml) | 47 | 0 | 4 |
| [`elasticbeanstalk`](services/elasticbeanstalk.yml) | 47 | 0 | 3 |
| [`codedeploy`](services/codedeploy.yml) | 47 | 0 | 1 |
| [`transcribe`](services/transcribe.yml) | 46 | 0 | 3 |
| [`fsx`](services/fsx.yml) | 45 | 0 | 8 |
| [`appconfig`](services/appconfig.yml) | 45 | 0 | 2 |
| [`workdocs`](services/workdocs.yml) | 44 | 0 | 17 |
| [`mediatailor`](services/mediatailor.yml) | 44 | 0 | 0 |
| [`databrew`](services/databrew.yml) | 44 | 0 | 0 |
| [`codepipeline`](services/codepipeline.yml) | 43 | 0 | 0 |
| [`fms`](services/fms.yml) | 42 | 0 | 0 |
| [`sns`](services/sns.yml) | 41 | 1 | 0 |
| [`ce`](services/ce.yml) | 41 | 0 | 12 |
| [`kinesisvideo`](services/kinesisvideo.yml) | 40 | 0 | 4 |
| [`iottwinmaker`](services/iottwinmaker.yml) | 40 | 0 | 0 |
| [`swf`](services/swf.yml) | 39 | 0 | 12 |
| [`ssm-contacts`](services/ssm-contacts.yml) | 39 | 0 | 1 |
| [`mechanicalturk`](services/mechanicalturk.yml) | 39 | 0 | 0 |
| [`cloudwatch`](services/cloudwatch.yml) | 38 | 0 | 16 |
| [`appmesh`](services/appmesh.yml) | 38 | 0 | 4 |
| [`memorydb`](services/memorydb.yml) | 38 | 0 | 1 |
| [`iotevents`](services/iotevents.yml) | 38 | 0 | 1 |
| [`evidently`](services/evidently.yml) | 38 | 0 | 0 |
| [`apprunner`](services/apprunner.yml) | 37 | 0 | 5 |
| [`states`](services/states.yml) | 37 | 0 | 2 |
| [`aoss`](services/aoss.yml) | 37 | 0 | 2 |
| [`inspector`](services/inspector.yml) | 37 | 0 | 0 |
| [`amplify`](services/amplify.yml) | 37 | 0 | 0 |
| [`entityresolution`](services/entityresolution.yml) | 36 | 0 | 3 |
| [`shield`](services/shield.yml) | 36 | 0 | 0 |
| [`network-firewall`](services/network-firewall.yml) | 36 | 0 | 0 |
| [`sms`](services/sms.yml) | 35 | 0 | 2 |
| [`panorama`](services/panorama.yml) | 34 | 0 | 2 |
| [`cases`](services/cases.yml) | 34 | 0 | 1 |
| [`route53domains`](services/route53domains.yml) | 34 | 0 | 0 |
| [`ram`](services/ram.yml) | 34 | 0 | 0 |
| [`m2`](services/m2.yml) | 34 | 0 | 0 |
| [`iotanalytics`](services/iotanalytics.yml) | 34 | 0 | 0 |
| [`access-analyzer`](services/access-analyzer.yml) | 33 | 2 | 1 |
| [`worklink`](services/worklink.yml) | 33 | 0 | 1 |
| [`kinesisanalytics`](services/kinesisanalytics.yml) | 33 | 0 | 1 |
| [`applicationinsights`](services/applicationinsights.yml) | 33 | 0 | 1 |
| [`tnb`](services/tnb.yml) | 33 | 0 | 0 |
| [`groundstation`](services/groundstation.yml) | 33 | 0 | 0 |
| [`glacier`](services/glacier.yml) | 33 | 0 | 0 |
| [`route53-recovery-readiness`](services/route53-recovery-readiness.yml) | 32 | 0 | 0 |
| [`kinesis`](services/kinesis.yml) | 32 | 0 | 0 |
| [`billingconductor`](services/billingconductor.yml) | 32 | 0 | 0 |
| [`elasticfilesystem`](services/elasticfilesystem.yml) | 31 | 0 | 7 |
| [`outposts`](services/outposts.yml) | 31 | 0 | 4 |
| [`migrationhub-orchestrator`](services/migrationhub-orchestrator.yml) | 31 | 0 | 3 |
| [`payment-cryptography`](services/payment-cryptography.yml) | 31 | 0 | 1 |
| [`ssm-incidents`](services/ssm-incidents.yml) | 31 | 0 | 0 |
| [`securitylake`](services/securitylake.yml) | 31 | 0 | 0 |
| [`schemas`](services/schemas.yml) | 31 | 0 | 0 |
| [`devops-guru`](services/devops-guru.yml) | 31 | 0 | 0 |
| [`amplifybackend`](services/amplifybackend.yml) | 31 | 0 | 0 |
| [`dataexchange`](services/dataexchange.yml) | 30 | 0 | 10 |
| [`xray`](services/xray.yml) | 30 | 0 | 3 |
| [`rolesanywhere`](services/rolesanywhere.yml) | 30 | 0 | 0 |
| [`lookoutmetrics`](services/lookoutmetrics.yml) | 30 | 0 | 0 |
| [`timestream`](services/timestream.yml) | 29 | 1 | 8 |
| [`voiceid`](services/voiceid.yml) | 29 | 0 | 2 |
| [`mediaconvert`](services/mediaconvert.yml) | 29 | 0 | 1 |
| [`detective`](services/detective.yml) | 28 | 1 | 8 |
| [`cloudsearch`](services/cloudsearch.yml) | 28 | 1 | 4 |
| [`discovery`](services/discovery.yml) | 28 | 0 | 1 |
| [`amplifyuibuilder`](services/amplifyuibuilder.yml) | 28 | 0 | 1 |
| [`machinelearning`](services/machinelearning.yml) | 28 | 0 | 0 |
| [`codestar-connections`](services/codestar-connections.yml) | 27 | 0 | 11 |
| [`codeconnections`](services/codeconnections.yml) | 27 | 0 | 11 |
| [`managedblockchain`](services/managedblockchain.yml) | 27 | 0 | 7 |
| [`b2bi`](services/b2bi.yml) | 27 | 0 | 2 |
| [`snowball`](services/snowball.yml) | 27 | 0 | 0 |
| [`servicediscovery`](services/servicediscovery.yml) | 27 | 0 | 0 |
| [`aps`](services/aps.yml) | 26 | 0 | 17 |
| [`chatbot`](services/chatbot.yml) | 26 | 0 | 5 |
| [`private-networks`](services/private-networks.yml) | 26 | 0 | 0 |
| [`mediastore`](services/mediastore.yml) | 26 | 0 | 0 |
| [`iot1click`](services/iot1click.yml) | 26 | 0 | 0 |
| [`compute-optimizer`](services/compute-optimizer.yml) | 26 | 0 | 0 |
| [`appfabric`](services/appfabric.yml) | 26 | 0 | 0 |
| [`comprehendmedical`](services/comprehendmedical.yml) | 25 | 1 | 0 |
| [`appflow`](services/appflow.yml) | 25 | 0 | 6 |
| [`backup-gateway`](services/backup-gateway.yml) | 25 | 0 | 2 |
| [`textract`](services/textract.yml) | 25 | 0 | 0 |
| [`pca-connector-ad`](services/pca-connector-ad.yml) | 25 | 0 | 0 |
| [`grafana`](services/grafana.yml) | 25 | 0 | 0 |
| [`cleanrooms-ml`](services/cleanrooms-ml.yml) | 25 | 0 | 0 |
| [`batch`](services/batch.yml) | 25 | 0 | 0 |
| [`verifiedpermissions`](services/verifiedpermissions.yml) | 24 | 2 | 0 |
| [`mediapackagev2`](services/mediapackagev2.yml) | 24 | 0 | 8 |
| [`fis`](services/fis.yml) | 24 | 0 | 5 |
| [`route53-recovery-control-config`](services/route53-recovery-control-config.yml) | 24 | 0 | 1 |
| [`refactor-spaces`](services/refactor-spaces.yml) | 24 | 0 | 0 |
| [`apptest`](services/apptest.yml) | 24 | 0 | 0 |
| [`controltower`](services/controltower.yml) | 23 | 0 | 41 |
| [`qapps`](services/qapps.yml) | 23 | 0 | 16 |
| [`cognito-identity`](services/cognito-identity.yml) | 23 | 0 | 3 |
| [`mq`](services/mq.yml) | 23 | 0 | 1 |
| [`secretsmanager`](services/secretsmanager.yml) | 23 | 0 | 0 |
| [`emr-containers`](services/emr-containers.yml) | 23 | 0 | 0 |
| [`ecr-public`](services/ecr-public.yml) | 23 | 0 | 0 |
| [`codeguru-profiler`](services/codeguru-profiler.yml) | 23 | 0 | 0 |
| [`acm-pca`](services/acm-pca.yml) | 23 | 0 | 0 |
| [`migrationhub-strategy`](services/migrationhub-strategy.yml) | 22 | 0 | 9 |
| [`lookoutvision`](services/lookoutvision.yml) | 22 | 0 | 3 |
| [`connect-campaigns`](services/connect-campaigns.yml) | 22 | 0 | 0 |
| [`aws-marketplace`](services/aws-marketplace.yml) | 21 | 1 | 34 |
| [`qldb`](services/qldb.yml) | 21 | 0 | 14 |
| [`dax`](services/dax.yml) | 21 | 0 | 9 |
| [`app-integrations`](services/app-integrations.yml) | 21 | 0 | 7 |
| [`resource-explorer-2`](services/resource-explorer-2.yml) | 21 | 0 | 6 |
| [`ssm-sap`](services/ssm-sap.yml) | 21 | 0 | 3 |
| [`synthetics`](services/synthetics.yml) | 21 | 0 | 0 |
| [`mgh`](services/mgh.yml) | 21 | 0 | 0 |
| [`sqs`](services/sqs.yml) | 20 | 3 | 0 |
| [`datapipeline`](services/datapipeline.yml) | 19 | 0 | 2 |
| [`translate`](services/translate.yml) | 19 | 0 | 0 |
| [`signer`](services/signer.yml) | 19 | 0 | 0 |
| [`servicequotas`](services/servicequotas.yml) | 19 | 0 | 0 |
| [`sagemaker-geospatial`](services/sagemaker-geospatial.yml) | 19 | 0 | 0 |
| [`opsworks-cm`](services/opsworks-cm.yml) | 19 | 0 | 0 |
| [`mediapackage`](services/mediapackage.yml) | 19 | 0 | 0 |
| [`identitystore`](services/identitystore.yml) | 19 | 0 | 0 |
| [`cloudhsm`](services/cloudhsm.yml) | 18 | 18 | 0 |
| [`resource-groups`](services/resource-groups.yml) | 18 | 0 | 11 |
| [`codestar`](services/codestar.yml) | 18 | 0 | 4 |
| [`medical-imaging`](services/medical-imaging.yml) | 18 | 0 | 3 |
| [`cognito-sync`](services/cognito-sync.yml) | 17 | 0 | 2 |
| [`rum`](services/rum.yml) | 17 | 0 | 0 |
| [`mediapackage-vod`](services/mediapackage-vod.yml) | 17 | 0 | 0 |
| [`ivschat`](services/ivschat.yml) | 17 | 0 | 0 |
| [`elastictranscoder`](services/elastictranscoder.yml) | 17 | 0 | 0 |
| [`neptune-db`](services/neptune-db.yml) | 16 | 24 | 17 |
| [`support`](services/support.yml) | 16 | 0 | 9 |
| [`docdb-elastic`](services/docdb-elastic.yml) | 16 | 0 | 3 |
| [`thinclient`](services/thinclient.yml) | 16 | 0 | 2 |
| [`route53profiles`](services/route53profiles.yml) | 16 | 0 | 2 |
| [`emr-serverless`](services/emr-serverless.yml) | 16 | 0 | 2 |
| [`internetmonitor`](services/internetmonitor.yml) | 16 | 0 | 1 |
| [`simspaceweaver`](services/simspaceweaver.yml) | 16 | 0 | 0 |
| [`kafkaconnect`](services/kafkaconnect.yml) | 16 | 0 | 0 |
| [`application-signals`](services/application-signals.yml) | 15 | 0 | 1 |
| [`oam`](services/oam.yml) | 15 | 0 | 0 |
| [`acm`](services/acm.yml) | 15 | 0 | 0 |
| [`codeguru-reviewer`](services/codeguru-reviewer.yml) | 14 | 0 | 3 |
| [`serverlessrepo`](services/serverlessrepo.yml) | 14 | 0 | 1 |
| [`osis`](services/osis.yml) | 14 | 0 | 1 |
| [`iotdeviceadvisor`](services/iotdeviceadvisor.yml) | 14 | 0 | 0 |
| [`health`](services/health.yml) | 14 | 0 | 0 |
| [`cloud9`](services/cloud9.yml) | 13 | 0 | 17 |
| [`healthlake`](services/healthlake.yml) | 13 | 0 | 11 |
| [`braket`](services/braket.yml) | 13 | 0 | 4 |
| [`codeguru-security`](services/codeguru-security.yml) | 13 | 0 | 2 |
| [`snow-device-management`](services/snow-device-management.yml) | 13 | 0 | 0 |
| [`pi`](services/pi.yml) | 13 | 0 | 0 |
| [`codestar-notifications`](services/codestar-notifications.yml) | 13 | 0 | 0 |
| [`arc-zonal-shift`](services/arc-zonal-shift.yml) | 13 | 0 | 0 |
| [`application-autoscaling`](services/application-autoscaling.yml) | 13 | 0 | 0 |
| [`launchwizard`](services/launchwizard.yml) | 12 | 0 | 25 |
| [`account`](services/account.yml) | 12 | 0 | 4 |
| [`scheduler`](services/scheduler.yml) | 12 | 0 | 0 |
| [`pca-connector-scep`](services/pca-connector-scep.yml) | 12 | 0 | 0 |
| [`networkmonitor`](services/networkmonitor.yml) | 12 | 0 | 0 |
| [`firehose`](services/firehose.yml) | 12 | 0 | 0 |
| [`bcm-data-exports`](services/bcm-data-exports.yml) | 12 | 0 | 0 |
| [`budgets`](services/budgets.yml) | 11 | 15 | 2 |
| [`trustedadvisor`](services/trustedadvisor.yml) | 11 | 0 | 41 |
| [`airflow`](services/airflow.yml) | 11 | 0 | 1 |
| [`timestream-influxdb`](services/timestream-influxdb.yml) | 11 | 0 | 0 |
| [`repostspace`](services/repostspace.yml) | 11 | 0 | 0 |
| [`license-manager-user-subscriptions`](services/license-manager-user-subscriptions.yml) | 11 | 0 | 0 |
| [`license-manager-linux-subscriptions`](services/license-manager-linux-subscriptions.yml) | 11 | 0 | 0 |
| [`supportapp`](services/supportapp.yml) | 10 | 0 | 3 |
| [`sdb`](services/sdb.yml) | 10 | 0 | 0 |
| [`savingsplans`](services/savingsplans.yml) | 10 | 0 | 0 |
| [`redshift-data`](services/redshift-data.yml) | 10 | 0 | 0 |
| [`rbin`](services/rbin.yml) | 10 | 0 | 0 |
| [`pipes`](services/pipes.yml) | 10 | 0 | 0 |
| [`polly`](services/polly.yml) | 9 | 0 | 0 |
| [`managedblockchain-query`](services/managedblockchain-query.yml) | 9 | 0 | 0 |
| [`kendra-ranking`](services/kendra-ranking.yml) | 9 | 0 | 0 |
| [`sts`](services/sts.yml) | 8 | 0 | 4 |
| [`tag`](services/tag.yml) | 8 | 0 | 0 |
| [`iotfleethub`](services/iotfleethub.yml) | 8 | 0 | 0 |
| [`dlm`](services/dlm.yml) | 8 | 0 | 0 |
| [`tax`](services/tax.yml) | 7 | 0 | 10 |
| [`cur`](services/cur.yml) | 7 | 0 | 5 |
| [`cost-optimization-hub`](services/cost-optimization-hub.yml) | 7 | 0 | 0 |
| [`artifact`](services/artifact.yml) | 6 | 0 | 4 |
| [`elastic-inference`](services/elastic-inference.yml) | 6 | 0 | 1 |
| [`rds-data`](services/rds-data.yml) | 6 | 0 | 0 |
| [`importexport`](services/importexport.yml) | 6 | 0 | 0 |
| [`ebs`](services/ebs.yml) | 6 | 0 | 0 |
| [`autoscaling-plans`](services/autoscaling-plans.yml) | 6 | 0 | 0 |
| [`application-cost-profiler`](services/application-cost-profiler.yml) | 6 | 0 | 0 |
| [`s3-outposts`](services/s3-outposts.yml) | 5 | 0 | 43 |
| [`pricing`](services/pricing.yml) | 5 | 0 | 0 |
| [`route53-recovery-cluster`](services/route53-recovery-cluster.yml) | 4 | 0 | 0 |
| [`scn`](services/scn.yml) | 3 | 0 | 24 |
| [`controlcatalog`](services/controlcatalog.yml) | 3 | 0 | 2 |
| [`cassandra`](services/cassandra.yml) | 2 | 12 | 15 |
| [`ec2-instance-connect`](services/ec2-instance-connect.yml) | 2 | 0 | 1 |
| [`workmailmessageflow`](services/workmailmessageflow.yml) | 2 | 0 | 0 |
| [`marketplacecommerceanalytics`](services/marketplacecommerceanalytics.yml) | 2 | 0 | 0 |
| [`finspace-api`](services/finspace-api.yml) | 1 | 30 | 0 |
| [`sso-oauth`](services/sso-oauth.yml) | 1 | 3 | 0 |
| [`mobileanalytics`](services/mobileanalytics.yml) | 1 | 0 | 2 |
| [`freetier`](services/freetier.yml) | 1 | 0 | 2 |
| [`eks-auth`](services/eks-auth.yml) | 1 | 0 | 0 |
| [`cloudtrail-data`](services/cloudtrail-data.yml) | 1 | 0 | 0 |
| [`apigateway`](services/apigateway.yml) | 0 | 152 | 9 |
| [`iotthingsgraph`](services/iotthingsgraph.yml) | 0 | 35 | 0 |
| [`execute-api`](services/execute-api.yml) | 0 | 12 | 3 |
| [`cloudcontrolapi`](services/cloudcontrolapi.yml) | 0 | 8 | 0 |
| [`IoTSecuredTunneling`](services/IoTSecuredTunneling.yml) | 0 | 8 | 0 |
| [`awsssoportal`](services/awsssoportal.yml) | 0 | 4 | 0 |
| [`a4b`](services/a4b.yml) | 0 | 0 | 96 |
| [`sqlworkbench`](services/sqlworkbench.yml) | 0 | 0 | 74 |
| [`iq`](services/iq.yml) | 0 | 0 | 63 |
| [`sso-directory`](services/sso-directory.yml) | 0 | 0 | 56 |
| [`sagemaker-mlflow`](services/sagemaker-mlflow.yml) | 0 | 0 | 52 |
| [`deepracer`](services/deepracer.yml) | 0 | 0 | 51 |
| [`appmesh-preview`](services/appmesh-preview.yml) | 0 | 0 | 39 |
| [`neptune-graph`](services/neptune-graph.yml) | 0 | 0 | 32 |
| [`honeycode`](services/honeycode.yml) | 0 | 0 | 30 |
| [`codecatalyst`](services/codecatalyst.yml) | 0 | 0 | 30 |
| [`one`](services/one.yml) | 0 | 0 | 27 |
| [`s3-object-lambda`](services/s3-object-lambda.yml) | 0 | 0 | 26 |
| [`vendor-insights`](services/vendor-insights.yml) | 0 | 0 | 24 |
| [`payments`](services/payments.yml) | 0 | 0 | 24 |
| [`deeplens`](services/deeplens.yml) | 0 | 0 | 24 |
| [`notifications`](services/notifications.yml) | 0 | 0 | 21 |
| [`freertos`](services/freertos.yml) | 0 | 0 | 20 |
| [`pcs`](services/pcs.yml) | 0 | 0 | 19 |
| [`kafka-cluster`](services/kafka-cluster.yml) | 0 | 0 | 19 |
| [`monitron`](services/monitron.yml) | 0 | 0 | 18 |
| [`deepcomposer`](services/deepcomposer.yml) | 0 | 0 | 18 |
| [`codewhisperer`](services/codewhisperer.yml) | 0 | 0 | 18 |
| [`ds-data`](services/ds-data.yml) | 0 | 0 | 17 |
| [`bugbust`](services/bugbust.yml) | 0 | 0 | 17 |
| [`groundtruthlabeling`](services/groundtruthlabeling.yml) | 0 | 0 | 16 |
| [`backup-storage`](services/backup-storage.yml) | 0 | 0 | 15 |
| [`purchase-orders`](services/purchase-orders.yml) | 0 | 0 | 14 |
| [`elemental-appliances-software`](services/elemental-appliances-software.yml) | 0 | 0 | 14 |
| [`application-transformation`](services/application-transformation.yml) | 0 | 0 | 14 |
| [`social-messaging`](services/social-messaging.yml) | 0 | 0 | 13 |
| [`q`](services/q.yml) | 0 | 0 | 13 |
| [`identity-sync`](services/identity-sync.yml) | 0 | 0 | 13 |
| [`elemental-activations`](services/elemental-activations.yml) | 0 | 0 | 13 |
| [`dbqms`](services/dbqms.yml) | 0 | 0 | 13 |
| [`billing`](services/billing.yml) | 0 | 0 | 13 |
| [`aws-marketplace-management`](services/aws-marketplace-management.yml) | 0 | 0 | 13 |
| [`ssm-quicksetup`](services/ssm-quicksetup.yml) | 0 | 0 | 12 |
| [`sagemaker-groundtruth-synthetic`](services/sagemaker-groundtruth-synthetic.yml) | 0 | 0 | 12 |
| [`cloudshell`](services/cloudshell.yml) | 0 | 0 | 10 |
| [`ts`](services/ts.yml) | 0 | 0 | 9 |
| [`s3express`](services/s3express.yml) | 0 | 0 | 9 |
| [`notifications-contacts`](services/notifications-contacts.yml) | 0 | 0 | 9 |
| [`iq-permission`](services/iq-permission.yml) | 0 | 0 | 9 |
| [`aws-portal`](services/aws-portal.yml) | 0 | 0 | 9 |
| [`wickr`](services/wickr.yml) | 0 | 0 | 8 |
| [`activate`](services/activate.yml) | 0 | 0 | 8 |
| [`networkmanager-chat`](services/networkmanager-chat.yml) | 0 | 0 | 7 |
| [`geo-places`](services/geo-places.yml) | 0 | 0 | 7 |
| [`user-subscriptions`](services/user-subscriptions.yml) | 0 | 0 | 6 |
| [`ec2messages`](services/ec2messages.yml) | 0 | 0 | 6 |
| [`cloudfront-keyvaluestore`](services/cloudfront-keyvaluestore.yml) | 0 | 0 | 6 |
| [`tiros`](services/tiros.yml) | 0 | 0 | 5 |
| [`supportplans`](services/supportplans.yml) | 0 | 0 | 5 |
| [`iot-device-tester`](services/iot-device-tester.yml) | 0 | 0 | 5 |
| [`geo-routes`](services/geo-routes.yml) | 0 | 0 | 5 |
| [`elemental-support-cases`](services/elemental-support-cases.yml) | 0 | 0 | 5 |
| [`customer-verification`](services/customer-verification.yml) | 0 | 0 | 5 |
| [`appstudio`](services/appstudio.yml) | 0 | 0 | 5 |
| [`ssmmessages`](services/ssmmessages.yml) | 0 | 0 | 4 |
| [`ssm-guiconnect`](services/ssm-guiconnect.yml) | 0 | 0 | 4 |
| [`iotjobsdata`](services/iotjobsdata.yml) | 0 | 0 | 4 |
| [`invoicing`](services/invoicing.yml) | 0 | 0 | 4 |
| [`codedeploy-commands-secure`](services/codedeploy-commands-secure.yml) | 0 | 0 | 4 |
| [`a2c`](services/a2c.yml) | 0 | 0 | 4 |
| [`resource-explorer`](services/resource-explorer.yml) | 0 | 0 | 3 |
| [`partnercentral-account-management`](services/partnercentral-account-management.yml) | 0 | 0 | 3 |
| [`mapcredits`](services/mapcredits.yml) | 0 | 0 | 3 |
| [`identitystore-auth`](services/identitystore-auth.yml) | 0 | 0 | 3 |
| [`awsconnector`](services/awsconnector.yml) | 0 | 0 | 3 |
| [`vpc-lattice-svcs`](services/vpc-lattice-svcs.yml) | 0 | 0 | 2 |
| [`supportrecommendations`](services/supportrecommendations.yml) | 0 | 0 | 2 |
| [`signin`](services/signin.yml) | 0 | 0 | 2 |
| [`geo-maps`](services/geo-maps.yml) | 0 | 0 | 2 |
| [`consolidatedbilling`](services/consolidatedbilling.yml) | 0 | 0 | 2 |
| [`consoleapp`](services/consoleapp.yml) | 0 | 0 | 2 |
| [`wam`](services/wam.yml) | 0 | 0 | 1 |
| [`verified-access`](services/verified-access.yml) | 0 | 0 | 1 |
| [`sustainability`](services/sustainability.yml) | 0 | 0 | 1 |
| [`serviceextract`](services/serviceextract.yml) | 0 | 0 | 1 |
| [`rhelkb`](services/rhelkb.yml) | 0 | 0 | 1 |
| [`rds-db`](services/rds-db.yml) | 0 | 0 | 1 |
| [`opensearch`](services/opensearch.yml) | 0 | 0 | 1 |
| [`mediaimport`](services/mediaimport.yml) | 0 | 0 | 1 |
| [`inspector-scan`](services/inspector-scan.yml) | 0 | 0 | 1 |
| [`elemental-support-content`](services/elemental-support-content.yml) | 0 | 0 | 1 |
| [`codeguru`](services/codeguru.yml) | 0 | 0 | 1 |
| [`arsenal`](services/arsenal.yml) | 0 | 0 | 1 |

Most common action prefixes:

| Prefix | Count |
| ------ | ----- |
| `List` | 2873 |
| `Get` | 2616 |
| `Delete` | 2050 |
| `Create` | 1912 |
| `Describe` | 1739 |
| `Update` | 1633 |
| `Put` | 487 |
| `Start` | 407 |
| `Tag` | 277 |
| `Untag` | 273 |

