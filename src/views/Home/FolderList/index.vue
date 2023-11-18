<script setup lang="ts">
import Folder from '@cps/Folder/index.vue';
</script>

<template>
  <div class="folder-list">
    <div class="folder-container">
      <Folder>
        <template #face>
          <img src="@img/home/icon-folder6.png" alt="" class="face" />
        </template>
        <template #title>
          <div>Object-Oriented</div>
          <div>Design</div>
        </template>
        <template #content>
          OSFI adopts advanced object-oriented design principles, making the entire financial system
          more modular, maintainable, and adaptable to evolving financial needs. This design style
          facilitates the easy integration of new financial tools and services into the system,
          enhancing system scalability.
        </template>
      </Folder>

      <Folder>
        <template #face>
          <img src="@img/home/icon-folder5.png" alt="" class="face" />
        </template>
        <template #title>
          <div>Efficient</div>
          <div>Performance</div>
        </template>
        <template #content>
          OSFI is committed to providing efficient financial tools and services. By building on the
          second-layer network of the Bitcoin network, OSFI can leverage Bitcoin's high performance
          and scalability to achieve fast transaction confirmations and low-latency financial
          operations, ensuring a smooth user experience.
        </template>
      </Folder>

      <Folder>
        <template #face>
          <img src="@img/home/icon-folder4.png" alt="" class="face" />
        </template>
        <template #title>
          <div>User Privacy</div>
          <div>Protection</div>
        </template>
        <template #content>
          OSFI emphasizes user privacy protection. Through its decentralized structure, users can
          better control their digital assets and financial data, reducing potential privacy risks
          associated with centralized financial institutions.
        </template>
      </Folder>
    </div>
    <div class="folder-container md:ml-28">
      <Folder>
        <template #face>
          <img src="@img/home/icon-folder3.png" alt="" class="face" />
        </template>
        <template #title>
          <div>Decentralized</div>
          <div>Security</div>
        </template>
        <template #content>
          OSFI is built on top of the Bitcoin network, leveraging its robust decentralized security.
          With the use of Bitcoin's blockchain technology, OSFI can provide tamper-proof transaction
          records and highly secure asset storage, effectively reducing potential attack risks.
        </template>
      </Folder>

      <Folder>
        <template #face>
          <img src="@img/home/icon-folder2.png" alt="" class="face" />
        </template>
        <template #title>
          <div>Openness and</div>
          <div>Scalability Design</div>
        </template>
        <template #content>
          The OSFI project encourages openness and scalability, allowing third-party developers to
          participate in innovation and add new features and services to the system. This openness
          helps create a diverse financial ecosystem, offering users more choices.
        </template>
      </Folder>
      <Folder>
        <template #face>
          <img src="@img/home/icon-folder1.png" alt="" class="face" />
        </template>
        <template #title>
          <div>Smart Contract</div>
          <div>Support</div>
        </template>
        <template #content>
          OSFI will provide smart contract functionality, enabling users to execute financial
          agreements in a secure and transparent manner. This allows for the automation of various
          financial operations, enhancing the trustworthiness and efficiency of transactions.
        </template>
      </Folder>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.folder-list {
  align-items: flex-start;
  @include -width(100%, 90%, 1200rem);
  margin: 0 auto;
  @include -margin-top(358rem, 358pm, 358pw);

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  @media (min-width: $phone) {
    flex-direction: row;
    align-items: flex-start;
  }

  > .folder-container {
    > div {
      &:not(:first-child) {
        margin-top: 48rem;
      }
    }

    margin-top: 48rem;

    @media (min-width: $phone) {
      margin-top: 0;

      > div {
        &:not(:first-child) {
          margin-top: 34rem;
        }
      }
    }
  }
}

.face {
  @include -width(92rem, 92pm, 92rem);
  margin-right: 17rem;
}
</style>
