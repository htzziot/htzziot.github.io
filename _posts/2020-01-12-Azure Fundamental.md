---
layout: post
title: Azure Fundamental培训记录
date: 2020-01-12 15:24
category: 
author: 
tags: [Azure]
summary: 
---

# 0 Opening

开发者社区：https://www.microsoft.com/zh-cn/dev-community/Event/Register?eventId=%E5%BE%AE%E8%BD%AFAzure%E5%9F%BA%E7%A1%80%E5%9F%B9%E8%AE%AD%E8%AF%BE%E7%A8%8B_nYSmc8UhkkRS&ocid=aid2423214

Azure自学学习路径：https://docs.microsoft.com/zh-cn/learn/paths/azure-fundamentals/?ocid=aid2423214_ThankYou_DevComm&eventId=%E5%BE%AE%E8%BD%AFAzure%E5%9F%BA%E7%A1%80%E5%9F%B9%E8%AE%AD%E8%AF%BE%E7%A8%8B_nYSmc8UhkkRS

考试大纲：https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE3VwUY

课程目录：

![](http://img.edgev.cn//edgev/20200111094243.png)

![](http://img.edgev.cn//edgev/20200111094226.png)

# 1 关键概念及术语

高可用性、可扩展性、弹性、敏捷性

容错、安全、灾难恢复、全球覆盖、客户访问延迟

预测成本考虑因素

技能要求考虑因素

提高生产力

![](http://img.edgev.cn//edgev/20200111093532.png)

**规模经济效应**：规模较大的企业开展业务的效率更高，平均成本更低。

**资本支出**（高昂的前期成本）与**运营支出**（即付即用）。

**云模型类型**

> **公有云**。公有云服务或托管提供商拥有，为多个组织和用户提供资源和服务，通过安全网络连接访问。
>
> **私有云。**由使用云资源的组织拥有和运营。
>
> **混合云。**将公有云和私有云结合起来。

![](http://img.edgev.cn//edgev/20200111095123.png)

**IaaS/PaaS/SaaS**概念及比较

> ![](http://img.edgev.cn//edgev/20200111095638.png)
>
> ![](http://img.edgev.cn//edgev/20200111095706.png)
>
> ![](http://img.edgev.cn//edgev/20200111100309.png)

# 2 核心Azure服务

## Azure Region（区域）

目前55个区域，100+个数据中心。

一个区域里可能或有一个或多个数据中心。数据中心之间用低延迟的告诉网络连接，区域内网络带宽高达1.6Pbps。

> 测试Azure区域网络速度的网站。www.azurespeed.com
>
> Azure 全球基础结构https://azure.microsoft.com/zh-cn/global-infrastructure/

**特殊区域**：Azure政府（位于美国，提供给美国政府及其服务承包商使用）、Azure中国（世纪互联运营，供中国客户使用）、Azure德国（供将数据留在德国的任何客户使用）

**区域对**(**Paired Region)**。与同一个地域中的另一个区域配对，构成区域对。可相互复制Azure资源，减少自然灾害、电力、网络中断引起的中断。

**地域（Geography）**。4个：美洲、欧洲、亚太、中东和非洲。

**可用性区域****（Availability Zone）**。Azure区域内的物理分离位置，对数据中心的分组，有一个或多个数据中心组成，配备独立的电源、冷却和网络系统。并非所有区域支持这个选项。中国没有。

**可用性集(Availability Set)**。

> 更新域（UD，Update Domain）。定期进行维护、性能或安全性跟新时，根据逻辑分组依次进行。每个组就叫一个更新域。
>
> 容错域(FD, Fault Domain)。在同一数据中心的不同硬件（一般来说是**物理机架**）之间为工作服务提供物理隔离。
>
> ![](http://img.edgev.cn//edgev/20200111103149.png)

## 资源组（Resource Group）

资源的逻辑容器，资源1：1资源组，资源必须存在于某一个资源组。

资源组允许其中的资源组不在同一个区域。

## Azure资源管理器(Azure Resource Manager, ARM)

https://docs.microsoft.com/zh-cn/azure/azure-resource-manager/

![](http://img.edgev.cn//edgev/20200111104611.png)

## Azure计算服务

**虚拟机VM**

**虚拟机规模集（VMSS）**

**应用程序服务（web/mobile/API, https）**

**函数计算**

**容器服务，ACI（容器实例），AKS（容器集群服务）**

## Azure网络服务

**虚拟网络**，对等互联，必须配置双向的内容。

**负载均衡器**，运行于OSI模型的第4层(TCP)

**应用程序网关**，运营与OSI模型第7层（http/https）,支持WAF

**流量管理器**，全球DNS负载均衡服务。根据DNS请求分发至后端服务

**VPN网关**，在Azure虚拟网络与本地网络之间发送加密的网络流量，需要一个本地网络网关。

**内容分发网络CDN**，提供内容减少延迟。

![](http://img.edgev.cn//edgev/20200111120750.png)

## Azure存储服务

数据类型。结构化、半结构化、非结构化数据。

![](http://img.edgev.cn//edgev/20200111133053.png)

Azure存储账户。Blob，磁盘、存档层、数据湖、文件存储。

![](http://img.edgev.cn//edgev/20200111133125.png)

## Azure数据库服务

CosmosDB

SQL DB

数据库迁移服务

![](http://img.edgev.cn//edgev/20200111134819.png)



## Azure备份与Azure站点恢复

Azure备份。从本地计算机、VM、PaaS服务中备份数据。

Azure站点恢复。

![](http://img.edgev.cn//edgev/20200111135317.png)

## Azure市场

将用户与微软合作伙伴连接起来。

## Azure物联网

![](http://img.edgev.cn//edgev/20200111141739.png)

IoT 模拟器 https://azure-samples.github.io/raspberry-pi-web-simulator/#Getstarted

IOT Central中有现成的物联网行业解决方案。

## Azure大数据及分析

Azure SQL数据仓库。 与数据湖（非结构化数据）相对应。

Azure HD Insight。

Azure Datalake Analytics

![image-20200111141823155](/Users/liuzhenquan/OneDrive - ABB/00-Inbox/02-MarkdownNotes/img/200111AzureFundamental.assets/image-20200111141823155.png)

## AI与机器学习

认知服务

机器学习服务

机器学习工作室

![](http://img.edgev.cn//edgev/20200111142951.png)

## 无服务器计算

函数计算

逻辑应用logic app

Azure事件网格

![](http://img.edgev.cn//edgev/20200111143906.png)

## Azure DevOps

## Azure管理工具

Azure门户, 网站， portal.azure.com

AzureCLI，命令行，az开头的命令

AzurePowershell，6.0之前支持windows，6.0以后支持win/linux/macOS

Azure Cloud Shell，内置了bash,powershell

![](http://img.edgev.cn//edgev/20200111145240.png)

## Azure顾问

从高可用性、安全性、性能、成本4个方面给出资源建议。

# 3. 安全、隐私、合规性及信任

> Azure 安全：https://docs.microsoft.com/zh-cn/azure/security/fundamentals/overview

## 安全

### 网络安全组NSG

规则集合。 入站和出站规则，包括源/目标的 IP、端口及协议。

规则可以关联到网卡或者子网上。

![](http://img.edgev.cn//edgev/20200111152108.png)

### Azure防火墙

有状态的、托管的防火墙即服务。使用Azure监视器来记录日志。

![](http://img.edgev.cn//edgev/20200111152306.png)

### Azure分布式拒绝服务（DDoS）保护

DDoS有两个服务层，免费的属于基本配置不需要创建，额外付费获得标准服务层。

![](http://img.edgev.cn//edgev/20200111152446.png)

### 选择Azure网络安全解决方案

![](http://img.edgev.cn//edgev/20200111152803.png)

安全责任共担。选择不同的服务，有不同的安全责任。

![](http://img.edgev.cn//edgev/20200111152907.png)

### 身份验证和授权

**身份验证**。Authentication，确认是否有合法身份登录。

- 识别人员或者服务
- 请求合法访问凭据
- 创建安全身份和访问控制原则的基础

**授权。** Authorization，确认是否有权访问资源。

- 确认经过身份验证的人员或服务的访问级别。
- 定义他们可以访问哪些数据，以及可以用数据做什么。

**Azure Active Directory（Azure AD or AAD）**

身份验证，单点登录、应用程序管理、企业对其他企业、企业对消费者的身份标识服务。

![](http://img.edgev.cn//edgev/20200111153447.png)

### Azure多重身份验证（MFA）

要求通过两个、多个元素进行完全身份验证。例如：SMS、电话PIN、Microsoft Authenticator app。

### Azure安全中心

提供安全建议，与“Azure顾问”中的功能类似。分为免费版和标准版。

监控安全设置。

自动将安全策略应用于任何新服务。

![](http://img.edgev.cn//edgev/20200111154241.png)

### Azure Key Vault

机密信息、密钥、数字证书等重要信息的存储与管理。

![](http://img.edgev.cn//edgev/20200111154736.png)

### Azure信息保护

通过标签对文档和电子邮件进行分类和保护：

- 自动使用管理员定义的规则和条件；
- 由用户手动完成；
- 提供建议，结合自动、手动方法。

![](http://img.edgev.cn//edgev/20200111154943.png)

### Azure高级威胁防护（ATP）

识别、检测和调查高级威胁、身份泄露和恶意内部操作。类似于银行风控系统。

![](http://img.edgev.cn//edgev/20200111155204.png)

## 治理

### Azure策略（Policy）

组织可以定义Azure上的策略。

![](http://img.edgev.cn//edgev/20200111155508.png)

### 基于角色的访问控制RBAC

实现对Azure资源进行细粒度的访问管理控制。

- 所有者，可以进行所有操作。
- 参与者Contributor，不能分配权限。
- 读者Reader，只能查看资源。

> 与Policy的区别：https://docs.microsoft.com/zh-cn/azure/governance/policy/overview#how-is-it-different-from-rbac

### Azure锁

防止资源、资源组被误操作，例如删除。

### Azure蓝图

![](http://img.edgev.cn//edgev/20200111161012.png)

### Azure监视器（Monitor）

从云和本地收集、分析和采样遥测数据。活动日志无法删除。

![](http://img.edgev.cn//edgev/20200111162146.png)



![](http://img.edgev.cn//edgev/20200111163451.png)



![](http://img.edgev.cn//edgev/20200111163518.png)



![](http://img.edgev.cn//edgev/20200111163542.png)



![](http://img.edgev.cn//edgev/20200111163605.png)



![](http://img.edgev.cn//edgev/20200111163633.png)



![](http://img.edgev.cn//edgev/20200111163656.png)



# 4. 定价与支持。

## 订阅

订阅属于某一个AAD目录，订阅主要考虑三个方面。

- 计费。以订阅为单位生成账单，进行成本划分。
- 控制访问。订阅是Azure资源的部署边界，并且能够设置RBAC。
- 配额限制。订阅也收到一些明确的资源使用限制，并不能无限创建。例如：最大存储账户容量 2PiB用于美国和欧洲，500TiB用于其他地区及英国。



## 三种购买方式

- 企业协议

- 网络直购

- 云解决方案提供商

![](http://img.edgev.cn//edgev/20200111163905.png)

## 免费账户

免费期12个月。10个免费的服务。

## 影响成本的因素

资源类型、购买方式、资源位置。

## 区域定价

![](http://img.edgev.cn//edgev/20200111164422.png)

**定价计算器**

**总体拥有成本计算器**

**降低成本**

![](http://img.edgev.cn//edgev/20200111164744.png)

## Azure成本管理

![](http://img.edgev.cn//edgev/20200111164938.png)

## 支持计划选项

免费支持：免费提供结算和订阅支持；文档；社区。

付费支持：技术，分级别。

## SLA

![](http://img.edgev.cn//edgev/20200111165929.png)

![](http://img.edgev.cn//edgev/20200111170111.png)

## Azure产品生命周期

在Azure更新网址中查看，产品公告，已发布、预览、  

个人预览(Private)：某些客户可以经申请使用。

公共预览(Public)：所有刻个都可以使用。

预览产品没有SLA保障、没有技术支持、价格有可能与正式版不同。

GA(General Availability)，一般可用性，就是正式发布。

# 附录

![](http://img.edgev.cn//edgev/20200111134023.jpeg)
